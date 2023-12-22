import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import breakpoints from "../styles/breakpoints";

import circleIcon from "../assets/icons/circle.png";
import noCircleIcon from "../assets/icons/no_circle.png";
import clearCanvasIcon from "../assets/icons/clear_canvas.png";

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

  font-size: 32pt;

  .canvasButtons {
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
    visibility: hidden;
  }

  .toggleDrawIcon:hover + .toggleDrawText {
    visibility: visible;
  }
`

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

const draw = (ctx: CanvasRenderingContext2D, event: MouseEvent) => {
  // event.preventDefault();
  let x = event.x;
  let y = event.y;

  ctx.fillStyle = randColor();
  const radius = Math.floor(Math.random() * (ctx.canvas.width / 3));
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function Canvas({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [drawable, setDrawable] = useState<boolean>(true);

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

      document.addEventListener("mousedown", mouseHandler);
    }

    return () => {
      document.removeEventListener("mousedown", mouseHandler);
    }
  }, [drawable])

  // Update canvas size to always match div size
  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, [width, height])

  const mouseHandler = (e: MouseEvent) => {
    // e.preventDefault();
    if (ctxRef.current && drawable) {
      draw(ctxRef.current, e);
    }
  }

  const clearCanvas = () => {
    if (ctxRef.current && canvasRef.current) {
      ctxRef.current.fillStyle = "white";
      ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
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