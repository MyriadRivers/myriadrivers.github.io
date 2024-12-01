import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import circleIcon from "../assets/icons/circle.png";
import noCircleIcon from "../assets/icons/no_circle.png";
import clearCanvasIcon from "../assets/icons/clear_canvas.png";

import aranea from "../assets/images/doodles/aranea.png";
import blattodea from "../assets/images/doodles/blattodea.png";
import coleoptera from "../assets/images/doodles/coleoptera.png";
import dermaptera from "../assets/images/doodles/dermaptera.png";
import diptera from "../assets/images/doodles/diptera.png";
import hemiptera from "../assets/images/doodles/hemiptera.png";
import hymenoptera from "../assets/images/doodles/hymenoptera.png";
import lepidoptera_imago from "../assets/images/doodles/lepidoptera_imago.png";
import lepidoptera_larva from "../assets/images/doodles/lepidoptera_larva.png";
import mantodea from "../assets/images/doodles/mantodea.png";
import myriapoda from "../assets/images/doodles/myriapoda.png";
import neuroptera from "../assets/images/doodles/neuroptera.png";
import odonata from "../assets/images/doodles/odonata.png";
import orthoptera from "../assets/images/doodles/orthoptera.png";

const MAX_DOODLES = 5;
const doodleList = [aranea, blattodea, coleoptera, dermaptera, diptera, hemiptera, hymenoptera, lepidoptera_imago, lepidoptera_larva, mantodea, myriapoda, neuroptera, odonata, orthoptera];

const StyledCanvas = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .siteCanvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  padding: 0px;
  margin: 0px;

  .canvasButtons {
    font-size: 32pt;
    display: flex;
    flex-direction: column-reverse;

    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .clearCanvas {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
  }

  .clearCanvasText {
    background: white;
    padding: 0px 10px;
    visibility: hidden;
  }

  .clearCanvasIcon, .circles, .noCircles {
    height: 1em;
    &:hover {
      cursor: pointer;
    }
  }

  .clearCanvasIcon:hover + .clearCanvasText {
    visibility: visible;
  }

  .toggleDraw {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
  }

  .toggleDrawText {
    background: white;
    padding: 0px 10px;
    visibility: hidden;
  }

  .toggleDrawIcon:hover + .toggleDrawText {
    visibility: visible;
  }
`

function Canvas({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const firstCircles = useRef<boolean>(false);

  const mouseHeldDown = useRef<boolean>(false);
  const prevMousePos = useRef<Point>({ x: 0, y: 0 });

  const frame = useRef<number>(0);
  const circles = useRef<Array<Circle>>([]);

  const doodleIdx = useRef<Array<number>>([]);
  const doodles = useRef<Array<Doodle>>([]);
  const firstClick = useRef<boolean>(false);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [drawable, setDrawable] = useState<boolean>(true);

  interface Circle {
    x: number;
    y: number;
    r: number;
    color: string;
  }


  class Doodle {
    x: number;
    y: number;
    src: string;

    constructor(x: number, y: number, src: string) {
      this.x = x;
      this.y = y;
      this.src = src;
    }

    render(ctx: CanvasRenderingContext2D) {
      const doodleImg = new Image();
      doodleImg.src = this.src;
      const scale = Math.min(ctx.canvas.width / 10, doodleImg.width) / doodleImg.width;
      ctx.drawImage(doodleImg, this.x, this.y, doodleImg.width * scale, doodleImg.height * scale);
    }
  }

  class Circle {
    x: number;
    y: number;
    r: number;
    maxR: number;
    color: string;
    progress: number;

    constructor(x: number, y: number, maxR: number, color: string) {
      this.x = x;
      this.y = y;
      this.r = 0;
      this.maxR = maxR;
      this.color = color;
      this.progress = 0;
    }

    // grow() {
    //   if (this.r < this.maxR) this.r += 1;
    // }

    easeOutQuad(t: number) {
      return t * (2 - t);
    }

    render(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();

      if (this.progress < 1) {
        this.progress += 0.01
        this.r = this.easeOutQuad(this.progress) * this.maxR;
      };
    }
  }

  interface Point {
    x: number;
    y: number;
  }

  const randColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.20) + 0.05;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  const clampColor = (value: number) => {
    return Math.min(Math.max(0, value), 255);
  }

  const similarColor = (hex: string, rand: number = .25) => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${clampColor(fuzz(r, rand))}, ${clampColor(fuzz(g, rand))}, ${clampColor(fuzz(b, rand))})`;
  }

  // Returns a random multiplier that deviates from 1.0 by at greatest the maxVariance
  const fuzz = (value: number, maxVariance: number = 0.25): number => {
    return value * (1 + (Math.random() * 2 - 1) * maxVariance);
  }

  const randEnds = () => {
    const rand = Math.random();
    const uShapeRand = Math.random() < 0.5 ? Math.pow(rand, 2) : 1 - Math.pow(rand, 2);
    return uShapeRand;
  }

  const randCircle = (ctx: CanvasRenderingContext2D, event: MouseEvent) => {
    const newCircle: Circle = new Circle(
      event.x,
      event.y,
      Math.floor(Math.random() * ((ctx.canvas.width / 7) - 25)) + 25,
      randColor()
    );
    circles.current.push(newCircle);
  }

  const draw = (ctx: CanvasRenderingContext2D) => {
    // event.preventDefault();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    for (let i = 0; i < circles.current.length; i++) {
      circles.current[i].render(ctx);
    }
    for (let i = 0; i < doodles.current.length; i++) {
      doodles.current[i].render(ctx);
    }

    frame.current++;
    requestAnimationFrame(() => draw(ctx));
  }

  useEffect(() => {
    if (containerRef.current) {
      // Canvas size listens to the size of the window
      const resizeObserver = new ResizeObserver((size) => {
        let rect = size[0].contentRect;
        setWidth(rect.width);
        setHeight(rect.height);
      })
      resizeObserver.observe(containerRef.current);
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");
      // Trigger all the canvas stuff

      if (ctxRef.current) draw(ctxRef.current);

      document.addEventListener("mousedown", mouseDownHandler);
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
      document.addEventListener("mouseleave", mouseUpHandler);
      document.addEventListener("dragend", mouseUpHandler);
      document.addEventListener("dragleave", mouseUpHandler);
    }

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseleave", mouseUpHandler);
      document.removeEventListener("dragend", mouseUpHandler);
      document.removeEventListener("dragleave", mouseUpHandler);
    }
  }, [drawable])

  // Update canvas size to always match div size
  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, [width, height])

  const mouseDownHandler = (e: MouseEvent) => {
    // e.preventDefault();
    if (ctxRef.current && drawable) {
      // draw(ctxRef.current, e);
      // Draw + animate a circle on mouse click

      mouseHeldDown.current = true;
      prevMousePos.current = { x: e.x, y: e.y };

      if (!firstClick.current) {
        const numDoodles = Math.min(Math.floor(Math.random() * (MAX_DOODLES - 1)) + 1, doodleList.length);
        // console.log("total num doodles: " + numDoodles);
        for (let i = 0; i < numDoodles; i++) {
          let idx = Math.floor(Math.random() * doodleList.length);
          while (doodleIdx.current.includes(idx)) {
            idx = Math.floor(Math.random() * doodleList.length);
          }
          doodleIdx.current.push(idx);
        }
        const w = ctxRef.current.canvas.width;
        const h = ctxRef.current.canvas.height;
        for (let i = 0; i < doodleIdx.current.length; i++) {
          let doodleX = randEnds() * (w * 0.8) + (w * 0.1);
          let doodleY = randEnds() * (h * 0.8) + (h * 0.1);
          // Make sure the doodles are sufficiently spaced out
          while (doodles.current.some((el) => Math.sqrt(Math.pow(doodleX - el.x, 2) + Math.pow(doodleY - el.y, 2)) < (w / 5))) {
            doodleX = randEnds() * (w * 0.8) + (w * 0.1);
            doodleY = randEnds() * (h * 0.8) + (h * 0.1);
          }
          const newDoodle = new Doodle(doodleX, doodleY, doodleList[doodleIdx.current[i]]);
          doodles.current.push(newDoodle);
        }
        firstClick.current = true;
      }

      randCircle(ctxRef.current, e);
    }
  }

  const mouseMoveHandler = (e: MouseEvent) => {
    // Draw some circles on the first page to fill in the empty space on the left
    if (ctxRef.current && canvasRef.current && !firstCircles.current) {
      const w = canvasRef.current.width;
      const h = canvasRef.current.height;

      for (let i = 0; i < 3; i++) {
        let autoCircle = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          clientX: fuzz((w / 4) + (i % 2 === 0 ? i : i * (w / 10)), 0.1),
          clientY: fuzz((h * 2 / 5) + (i * (h / 7)), 0.05)
        })
        randCircle(ctxRef.current, autoCircle);
      }
      firstCircles.current = true;
    }
    if (mouseHeldDown.current && ctxRef.current) {
      const currPos = { x: e.x, y: e.y };
      const dist = Math.sqrt(
        Math.pow(currPos.x - prevMousePos.current.x, 2) +
        Math.pow(currPos.y - prevMousePos.current.y, 2)
      );

      if (dist > Math.min(ctxRef.current.canvas.width / 10, ctxRef.current.canvas.height / 10)) {
        randCircle(ctxRef.current, e);
        prevMousePos.current = currPos;
      }
    }
  }

  const mouseUpHandler = () => {
    mouseHeldDown.current = false;
  }

  const clearCanvas = () => {
    if (ctxRef.current && canvasRef.current) {
      ctxRef.current.fillStyle = "white";
      ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      circles.current = [];
    }
  }

  return (
    <StyledCanvas ref={containerRef}>
      <canvas ref={canvasRef} height={"100%"} width={"100%"} className={"siteCanvas"}></canvas>
      {children}
      <div className={"canvasButtons"}>
        <div className={"clearCanvas"}>
          <img className="clearCanvasIcon" onClick={clearCanvas} src={clearCanvasIcon} alt={"clear canvas"} />
          <div className={"clearCanvasText"}>clear</div>
        </div>

        <div className="toggleDraw">
          <div className={"toggleDrawIcon"}>
            {drawable ? <img className={"circles"} src={circleIcon} alt={"circles: on"} onClick={() => setDrawable(!drawable)} />
              : <img className={"noCircles"} src={noCircleIcon} alt={"circles: off"} onClick={() => setDrawable(!drawable)} />}
          </div>
          <div className={"toggleDrawText"}>{drawable ? "draw: on" : "draw: off"}</div>
        </div>
      </div>
    </StyledCanvas>
  )
}

export default Canvas