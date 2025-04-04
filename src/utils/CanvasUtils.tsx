// interface Circle {
//     x: number;
//     y: number;
//     r: number;
//     color: string;
// }


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

    destroy: boolean;
    destroyProgress: number;
    destroyed: boolean;

    constructor(x: number, y: number, maxR: number, color: string) {
        this.x = x;
        this.y = y;
        this.r = 0;
        this.maxR = maxR;
        this.color = color;
        this.progress = 0;
        this.destroy = false;
        this.destroyProgress = 0;
        this.destroyed = false;
    }

    // grow() {
    //   if (this.r < this.maxR) this.r += 1;
    // }

    easeOut(t: number, exp: number) {
        return 1 - Math.pow((1 - t), exp);
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();

        const pCol = parseRGBA(this.color);
        if (!pCol) return;

        if (pCol.a <= 0 && !this.destroyed) this.destroyed = true;

        if (this.progress < 1) {
            this.progress += 0.015
            this.r = this.easeOut(this.progress, 4) * this.maxR;
        }
        //  else if (this.progress >= 1 && this.progress < 3) {
        //     this.progress += 0.01;
        // } else if (!this.destroyed) {
        //     this.progress += 0.01;
        //     this.destroyProgress += 0.0005;
        //     const newAlpha = pCol.a * (1 - this.destroyProgress) < 0.01 ? 0 : pCol.a * (1 - this.destroyProgress);
        //     const nCol = toColor(pCol.r, pCol.g, pCol.b, newAlpha);
        //     this.color = nCol;
        // };

        // if (this.destroy) {
        //     const pCol = parseRGBA(this.color);
        //     console.log(this.color);
        //     if (!pCol) return;
        //     if (this.destroyProgress < 1) {
        //         this.destroyProgress += 0.01;
        //         const newAlpha = pCol.a * (1 - this.destroyProgress) < 0.01 ? 0 : pCol.a * (1 - this.destroyProgress);
        //         const nCol = toColor(pCol.r, pCol.g, pCol.b, newAlpha);
        //         this.color = nCol;
        //         console.log(this.destroyProgress);
        //     } else {
        //         this.destroyed = true;
        //     }
        // }
    }
}

interface Point {
    x: number;
    y: number;
}

const toColor = (r: number, g: number, b: number, a: number) => {
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const randColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.20) + 0.05;

    return toColor(r, g, b, a);
}

const brighten = (value: number, amount: number = 0.6) => {
    return value + ((255 - value) * amount)
}

const randPastel = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.25) + 0.15;

    return `rgb(${brighten(r)}, ${brighten(g)}, ${brighten(b)}, ${a})`;
}

const randBrightness = (r: number, g: number, b: number) => {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.25) + 0.15;

    return `rgb(${brighten(r)}, ${brighten(g)}, ${brighten(b)}, ${a})`;
}

const clampColor = (value: number) => {
    return Math.min(Math.max(0, value), 255);
}

const similarHex = (hex: string, rand: number = .25) => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${clampColor(fuzz(r, rand))}, ${clampColor(fuzz(g, rand))}, ${clampColor(fuzz(b, rand))})`;
}

const similarRGBA = (r: number, g: number, b: number, a: number, rand: number = .25) => {
    return `rgb(${clampColor(Math.round(fuzz(r, rand)))}, ${clampColor(Math.round(fuzz(g, rand)))}, ${clampColor(Math.round(fuzz(b, rand)))}, ${a})`;
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

function parseRGBA(color: string): { r: number; g: number; b: number; a: number } | null {
    const rgbaRegex = /rgba*\(\s*(\d*\.?\d*)\s*,\s*(\d*\.?\d*)\s*,\s*(\d*\.?\d*)\s*,\s*(\d*\.?\d*)\s*\)/;
    const match = color.match(rgbaRegex);

    if (match) {
        const [, r, g, b, a] = match;
        return {
            r: Math.round(parseFloat(r)),
            g: Math.round(parseFloat(g)),
            b: Math.round(parseFloat(b)),
            a: parseFloat(a),
        };
    }

    return null; // Return null if the format doesn't match
}

export { Circle, Doodle, type Point, randColor, randPastel, randEnds, fuzz, similarRGBA, parseRGBA, randBrightness }