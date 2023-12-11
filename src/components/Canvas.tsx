import { ReactNode, useEffect, useRef, useState } from "react"
import styled from "styled-components"

const StyledCanvas = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
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

  return `rgb(${r}, ${g}, ${b})`;
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

const circle = (ctx: CanvasRenderingContext2D, c: Point, r: number) => {
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, 2 * Math.PI + 10);
  ctx.stroke();
}

const circle2 = (ctx: CanvasRenderingContext2D, c: Point, r: number) => {
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, 2 * Math.PI + 10);
  ctx.closePath();
  ctx.fill();
}

const squiggle = (ctx: CanvasRenderingContext2D, center: Point, r: number, variance: number) => {
  const points = new Array<Point>();
  const randPoint = (radius: number, c: Point, theta: number, v: number): Point => {
    return {
      x: fuzz(radius, v) * Math.cos(theta) + c.x,
      y: fuzz(radius, v) * Math.sin(theta) + c.y,
    }
  }

  for (let t = 0; t < Math.PI * 2; t += Math.PI / 16) {
    points.push(randPoint(r, center, t, variance));
  }

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.moveTo(points[0].x, points[0].y);
  ctx.closePath();
  ctx.fill();
}

const draw = (pattern: number = 0, ctx: CanvasRenderingContext2D) => {
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;

  let c: Point = {
    x: Math.random() * width,
    y: Math.random() * height
  }

  switch (pattern) {
    case 1:
      // Concentric circles
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width, height);
      
      // let spacing = Math.random() * 12 + 3;
      let spacing = 4;
      ctx.strokeStyle = "#ff7fa9";
      ctx.lineWidth = 2;

      let i = 0;

      while ((i * spacing) + c.x < width || c.x - (i * spacing) > 0 || (i * spacing) + c.y < height || c.y - (i * spacing) > 0) {
        circle(ctx, c, i * spacing);
        i++;
      }
      // ctx.strokeRect(1, 1, width - 1, height - 1);
      break;
    case 2:
      // Random closed shape
      ctx.fillStyle = similarColor("1ebc9f");
      ctx.fillRect(0, 0, width, height);
      let maxDimension = Math.max(width, height);
      for (let i = maxDimension; i >= 0; i -= maxDimension / 5) {
        ctx.fillStyle = similarColor("1ebc9f");
        squiggle(ctx, c, i, 0.5);
      }
      break;
    case 3:
      ctx.fillStyle = similarColor("6cc2da", 0.1);
      ctx.fillRect(0, 0, width, height);

      let spacing2 = 20;
      let maxDim = Math.max(width, height);
      let j = maxDim;

      while (j > 0) {
        ctx.fillStyle = similarColor("6cc2da", 0.15);
        circle2(ctx, c, j);
        j -= spacing2;
      }
      break;
    case 4:
        // Random monochromatic fill
        ctx.fillStyle = similarColor("ffffff");
        ctx.fillRect(0, 0, width, height);
        break;
    default:
      // White
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
  }
}

function Canvas({effect = 5, children}: {effect?: number, children: ReactNode}) {
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
        draw(effect, ctx);
      }
    }
  }, [width, height])

  return (
    <StyledCanvas ref={containerRef}>
      <canvas ref={canvasRef} height={"100%"} width={"100%"}></canvas>
      <div className={"children"}>
        {children}
      </div>
    </StyledCanvas>
  )
}

export default Canvas