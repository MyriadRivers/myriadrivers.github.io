import { useRef } from "react";
import styled from "styled-components";

import SFProEOT from "../assets/fonts/SFPro/SFPro-Regular.eot";
import SFProSVG from "../assets/fonts/SFPro/SFPro-Regular.svg";
import SFProTTF from "../assets/fonts/SFPro/SFPro-Regular.ttf";
import SFProWOFF from "../assets/fonts/SFPro/SFPro-Regular.woff";
import SFProWOFF2 from "../assets/fonts/SFPro/SFPro-Regular.woff2";

const StyledCanvas = styled.div`
    @font-face {
        font-family: "SF Pro";
        src: url(${SFProTTF}) format('truetype'),
            url(${SFProSVG}) format('svg'),
            url(${SFProEOT}) format('embedded-opentype'),
            url(${SFProWOFF}) format('woff'),
            url(${SFProWOFF2}) format('woff2');
    }

    display: flex;
`

const Canvas = () => {
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

            for (let i = 0; i < (Math.floor(Math.random() * 801) + 200); i++) {
                unknownNumber(ctx, Math.random() > 0.5, Math.random() > 0.5, (Math.floor(Math.random() * 91) + 10));
            }
        }
    }

    return (
        <StyledCanvas>
            <canvas width="1000" height="1000" ref={canvasRef}></canvas>
            <button onClick={generate}>Generate</button>
        </StyledCanvas>
    )
}

export default Canvas;