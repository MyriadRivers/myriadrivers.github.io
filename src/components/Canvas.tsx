import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import circleIcon from "../assets/icons/circle.png";
import noCircleIcon from "../assets/icons/no_circle.png";
import soundIcon from "../assets/icons/sound.png";
import muteIcon from "../assets/icons/mute.png";
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
import { BaseContext, Panner3D, PolySynth, Reverb, Synth, Volume } from "tone";
import { Circle, Doodle, fuzz, Point, randEnds, randPastel } from "../utils/CanvasUtils";
import { numToScale, octave, Scale } from "../utils/musicUtils";

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

  .canvasIcon {
    height: 1em;
    &:hover {
      cursor: pointer;
    }
  }

  .canvasIcon:hover + .canvasText {
    visibility: visible;
  }

  .canvasButton {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
  }

  .canvasText {
    background: white;
    padding: 0px 10px;
    visibility: hidden;
  }
`

function Canvas({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const PolyRef = useRef<PolySynth | null>(null);
  const Panner3DRef = useRef<Panner3D | null>(null);
  const gainRef = useRef<Volume | null>(null);
  const reverbRef = useRef<Reverb | null>(null);

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
  const [audible, setAudible] = useState<boolean>(true);

  const randCircle = (ctx: CanvasRenderingContext2D, event: MouseEvent): Circle => {
    const maxPossibleR = ctx.canvas.width / 7;
    const maxR = Math.floor(Math.random() * (maxPossibleR - 25)) + 25;
    const newCircle: Circle = new Circle(
      event.x,
      event.y,
      maxR,
      // randColor()
      randPastel()
    );
    circles.current.push(newCircle);
    makeNote(newCircle, event);
    return newCircle;
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

  const makeNote = (c: Circle, event: MouseEvent) => {
    // Play a note
    if (!PolyRef.current || !Panner3DRef.current || !canvasRef.current) return;
    const maxPossibleR = canvasRef.current.width / 7;
    const xPan = (event.x - (canvasRef.current.width / 2)) / (canvasRef.current.width / 2);
    const yPan = (event.y - (canvasRef.current.height / 2)) / (canvasRef.current.height / 2);
    const note = octave(numToScale(Math.random(), Scale.PENTATONIC, 2), 1);
    const duration = ((c.maxR / maxPossibleR) / 2) + 0.01
    // Panner3DRef.current.setPosition(xPan, yPan, 0);
    PolyRef.current.triggerAttackRelease(note, duration);
  }

  // Set up canvas, sounds
  useEffect(() => {
    if (containerRef.current) {
      // Canvas size listens to the size of the window
      const resizeObserver = new ResizeObserver((size) => {
        let rect = size[0].contentRect;
        setWidth(rect.width);
        setHeight(rect.height);
      })
      resizeObserver.observe(containerRef.current);

      gainRef.current = new Volume().toDestination();
      reverbRef.current = new Reverb(0.5).connect(gainRef.current);
      Panner3DRef.current = new Panner3D().connect(reverbRef.current);
      PolyRef.current = new PolySynth(Synth, { oscillator: { type: "sine" }, envelope: { attack: 0.05, release: 0.1 } }).connect(Panner3DRef.current);
    }
  }, [])

  useEffect(() => {
    if (!gainRef.current) return;
    gainRef.current.mute = !audible;
  }, [audible])

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
    // TODO: Redo this only happen in non-mobile in the actual middle of the div, on page load.
    // Draw some circles on the first page to fill in the empty space on the left
    if (ctxRef.current && canvasRef.current && !firstCircles.current && canvasRef.current.width > 1) {
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
        <div className={"canvasButton"}>
          <img className="canvasIcon" onClick={clearCanvas} src={clearCanvasIcon} alt={"clear canvas"} />
          <div className={"canvasText"}>clear</div>
        </div>

        <div className="canvasButton">
          <div className={"canvasIcon"}>
            {drawable ? <img className={"canvasIcon"} src={circleIcon} alt={"circles: on"} onClick={() => setDrawable(!drawable)} />
              : <img className={"canvasIcon"} src={noCircleIcon} alt={"circles: off"} onClick={() => setDrawable(!drawable)} />}
          </div>
          <div className={"canvasText"}>{drawable ? "draw: on" : "draw: off"}</div>
        </div>

        <div className="canvasButton">
          <div className={"canvasIcon"}>
            {audible ? <img className={"canvasIcon"} src={soundIcon} alt={"sound: on"} onClick={() => setAudible(!audible)} />
              : <img className={"canvasIcon"} src={muteIcon} alt={"sound: off"} onClick={() => setAudible(!audible)} />}
          </div>
          <div className={"canvasText"}>{audible ? "sound: on" : "sound: off"}</div>
        </div>
      </div>
    </StyledCanvas>
  )
}

export default Canvas