import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"

const StyledCanvas = styled.div`
  position: relative;
  width: 100%;

  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

`

const randColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`
}

const circle = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}

const draw = (ctx: CanvasRenderingContext2D) => {
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;

  let cx = Math.random() * width;
  let cy = Math.random() * height;

  let i = 0;
  let spacing = Math.random() * 12 + 3;

  ctx.strokeStyle = randColor();
  while ((i * spacing) + cx < width || cx - (i * spacing) > 0 || (i * spacing) + cy < height || cy - (i * spacing) > 0) {
    circle(ctx, cx, cy, i * spacing);
    i++;
  }
}

function Canvas({children}: {children: ReactNode}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  // Update canvas size to always match div size
  useEffect(() => {
     if (containerRef.current) {
      const resizeObserver = new ResizeObserver((size) => {
        let rect = size[0].contentRect;
        setWidth(rect.width);
        setHeight(rect.height);
      })
      resizeObserver.observe(containerRef.current);
     }
  }, [])

  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      if (ctx) {
        draw(ctx);
      }
    }
  }, [width, height])

  return (
    <StyledCanvas ref={containerRef}>
      <canvas ref={canvasRef} height={"100%"} width={"100%"}></canvas>
      {children}
    </StyledCanvas>
  )
}

export default Canvas