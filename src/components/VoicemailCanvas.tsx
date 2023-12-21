import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCanvas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    canvas {
        border: solid;
    }
`

const VoicemailCanvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    /**
     * Returns a random number 0 - 9 inclusive.
     * @returns random digit.
     */
    const r = () => {
        return Math.floor(Math.random() * 10);
    }

    const randomRGB = (alpha: boolean = true) => {
        if (!alpha) {
            return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
        return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.random()})`;
    }

    const unknownNumber = (ctx: CanvasRenderingContext2D, alpha: boolean = true, randSize: boolean = true, size: number = 30) => {
        // Random phone number
        let num = `(${r()}${r()}${r()}) ${r()}${r()}${r()}-${r()}${r()}${r()}${r()}`;

        // Random font size between 10 and 300
        let fontSize = Math.floor(Math.random() * 191) + 10;
        ctx.font = randSize ? `${fontSize}px SF Pro` : `${size}px SF Pro`;

        // Random font color
        ctx.fillStyle = randomRGB(alpha);

        // Random rotation
        let rotation = Math.random() * Math.PI * 2

        // Random coordinates
        let x = Math.random() * ctx.canvas.width;
        let y = Math.random() * ctx.canvas.height;

        // Actually draw the number
        ctx.rotate(rotation);
        ctx.fillText(num, x, y);

        // Reset canvas rotation
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    const generate = () => {
        if (canvasRef.current) {
            let ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            // Reset canvas to white
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);



            // 50% chance of either having transparent numbers or not
            let randomAlpha = Math.random() > 0.5;

            // 50% chance of either random sizes or all the same size
            let randomSize = Math.random() > 0.5;

            // If all the same size, set a random size between 10px and 20% of the canvas width
            let maxSize = canvasRef.current.width / 10;
            let setSize = Math.floor((Math.random() * maxSize) - 10) + 10;

            // Draw a random number of phone numbers based on canvas size
            let randomAmount = Math.floor((Math.random() * canvasRef.current.width)) + (canvasRef.current.width / 10);

            for (let i = 0; i < randomAmount; i++) {
                unknownNumber(ctx, randomAlpha, randomSize, setSize);
            }
        }
    }

    useEffect(() => {
        const resizeImg = () => {
            if (!canvasRef.current || !canvasRef.current.parentElement || !containerRef.current) return;
            let maxHeight = window.innerHeight;
            let maxWidth = containerRef.current.clientWidth - 10;
            canvasRef.current.height = Math.min(maxHeight / 2, maxWidth);
            canvasRef.current.width = Math.min(maxHeight / 2, maxWidth);
        }
        window.addEventListener("resize", resizeImg);
        window.dispatchEvent(new Event("resize"));

        return () => {
            window.removeEventListener("resize", resizeImg);
        }
    }, [])

    return (
        <StyledCanvas ref={containerRef}>
            <Button text={"Generate"} onClick={generate} />
            <div>
                <canvas ref={canvasRef}></canvas>
            </div>
        </StyledCanvas>
    )
}

export default VoicemailCanvas;