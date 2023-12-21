import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import breakpoints from "../styles/breakpoints";

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

  .clearCanvas, .toggleDraw {
    right: 20px;

    position: fixed;
    background: none;
    filter: grayscale(100%);

    font-size: 30pt;

    @media ${breakpoints.mobile} {
      font-size: 20pt;
    }
    border: none;

    padding: 0px;

    &:hover {
      cursor: pointer;
    }
  }

  .clearCanvas {
    bottom: 20px;
    filter: saturate(0%) grayscale(100%) brightness(69%) contrast(300%);
  }

  .toggleDraw {
    bottom: calc(40px + 30pt);
    @media ${breakpoints.mobile} {
      bottom: calc(40px + 20pt);
    }
  }

  .noCircles {
    filter: contrast(150%);
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
  event.preventDefault();
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
    e.preventDefault();
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
      <button className="clearCanvas" onClick={clearCanvas}>🔄</button>
      <div className="toggleDraw" onClick={() => setDrawable(!drawable)}>
        {drawable ? <div className={"circles"}>🔘</div> : <div className={"noCircles"}>🚫</div>}
      </div>
    </StyledCanvas>
  )
}

export default Canvas