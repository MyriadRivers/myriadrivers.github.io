const pc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export enum Scale {
    CHROMATIC = "CHROMATIC",
    DIATONIC = "DIATONIC",
    PENTATONIC = "PENTATONIC",
}

/**
 * Turns a float from 0 to 1 to the corresponding note on a given number of scales
 * @param num Number between 0 and 1
 * @param scale Type of scale to use
 * @param octaves How many octaves of the scale to append to each other
 * @returns The specific note between the first and last notes of the total scales corresponding to the number as a percentage
 */
export const numToScale = (num: number, scale: Scale, octaves: number): string => {
    const chromatic = [pc[0], pc[1], pc[2], pc[3], pc[4], pc[5], pc[6], pc[7], pc[8], pc[9], pc[10], pc[11]];
    const diatonic = [pc[0], pc[2], pc[4], pc[5], pc[7], pc[9], pc[11]];
    const pentatonic = [pc[0], pc[2], pc[4], pc[7], pc[9]];

    var pcs;

    switch (scale) {
        case "CHROMATIC":
            pcs = chromatic;
            break;
        case "DIATONIC":
            pcs = diatonic;
            break;
        case "PENTATONIC":
            pcs = pentatonic;
            break;
        default:
            pcs = chromatic;
    }

    var notes = new Array<string>();

    for (let i = 0; i < octaves; i++) {
        // Centers the octaves around the 4th octave
        var octave = i + 5 - Math.ceil(octaves / 2);
        for (let j = 0; j < pcs.length; j++) {
            notes.push(pcs[j] + octave)
        }
    }
    var note = Math.round(num * (notes.length - 1));
    return notes[note];
}

/**
 * Moves a note up or down a given number of octaves.
 * @param note Note to change pitch.
 * @param mod How many octaves to adjust the note's pitch.
 * @returns Note in the new octave.
 */
export const octave = (note: string, mod: number) => {
    let baseNote = note.substring(0, note.length - 1);
    let baseOct = note.substring(note.length - 1);
    let newOct = parseInt(baseOct) + mod;

    return baseNote + newOct;
}