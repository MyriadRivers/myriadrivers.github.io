import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./orb_weaver_main.png";
import mayflyImage from "./mayfly.jpg";
import stepsImage from "./web_steps.png";
import heptagonImage from "./spinybacked_orbweaver.jpg";
import { ReactNode } from "react";

const title: string = "Orb Weaver";
const dateRange: string = "Apr 2023";
const summary: string = "Summary";
const links: Array<{ text: string, url: string }> = [
    { text: "try it!", url: "https://myriadrivers.github.io/orb-weaver/" },
    { text: "GitHub", url: "https://github.com/MyriadRivers/orb-weaver" },
];
const tags: Array<ProjectTag> = [
    ProjectTag.engineering, ProjectTag.fun
];
const media: ReactNode = <Image src={mainImage} mainImage={true}/>;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Weave aleatoric musical orb webs. Implemented in plain TypeScript and React.js.
                </p>
            </>
    },
    {
        shortTitle: "Concept",
        title: "Concept",
        summary: "Orb weaver was conceived as an algorithmic musical composition",
        contents:
            <>
                <p>
                    Orb weaver was developed for an assignment to create an algorithmic composition. I tried to avoid sonifying a well-known, existing
                    algorithm—I wanted to make something more unique and original. Previously,
                    we had discussed a composition based on the boids flocking simulation; this got me thinking about algorithms in nature.
                </p>
                <p>
                    I'm a big fan of bugs, insects, and other arthropods, so I started considering algorithmic behavior in insect biology. I found some
                    optimization algorithms based off bee and ant colony behavior, but they seemed both out of scope to implement
                    and difficult to come up with a solid sonification scheme for.
                </p>
                <p>
                    I ended up consulting with ChatGPT, which I find very useful for rapidly brainstorming and bouncing creative ideas around. Given my interests,
                    it pointed me towards fractal music and the intricate pattern of veined insect wings.
                </p>
                <Image src={mayflyImage} caption={"Mayfly with intricate, veined wings outstretched, source: Me"} />
                <p>
                    While I liked the idea of the a more visual approach, fractal music has been done countless times before, and I couldn't really think of a
                    concrete way to turn insect wings into a musical algorithm. I thought about other visually interesting phenomena among insects and arthropods,
                    and spider webs immediately became an obvious choice: the classic orb web is built following basically the same structure every time,
                    and it's a very recognizable visual motif.
                </p>
                <Image src={heptagonImage} caption={"Spinybacked Orbweaver in a recognizable orb web, source: Me"} />
            </>
    },
    {
        shortTitle: "Process",
        title: "Process",
        summary: "Coordinates, type, and length of the threads changes what sounds are played",
        contents:
            <>
                <p>
                    I researched the orb weaver web spinning process, watching videos to help determine the exact steps they take.
                </p>
                <Image src={stepsImage} caption={"Orb web construction steps, source: Davide Pedone, Wikipedia"} />
                <p>
                    Orb weaving spiders follow the same general process for constructing their webs, first spinning a bridge across two points from which
                    to support the rest of the web, and then spinning the frame, anchor and radius threads, across which they construct their two spirals.
                </p>
                <p>
                    The webs spun in the app follow the same process, while location and direction of each threads is slightly randomized.
                    The number of loops and direction each of the spirals take, the proximity of the radius threads, and the general web color,
                    color variance, spinning speed, and thread width is also randomized.
                </p>
                <p>
                    To better capture the structure of the orb web process, the different steps also adopt different sonification schemes:
                </p>
                <ul>
                    <li>
                        <b>Bridge, Major Axes, and Anchor Threads: </b>Random bass register sine wave with both note duration and repeat frequency proportional to
                        length of the thread.
                    </li>
                    <li>
                        <b>Frame Threads: </b>Same as above, but with a triangle wave. As they're shorter, they'll repeat less frequently and can thus be
                        more salient.
                    </li>
                    <li>
                        <b>Radius Threads: </b>Random, non-repeating, short sine wave tone.
                    </li>
                    <li>
                        <b>Auxiliary Spiral: </b> Random, high register sawtooth ping. X and Y coordinates affect the panning of the note.
                    </li>
                    <li>
                        <b>Capture Spiral: </b> Same as the auxiliary spiral, but with a triangle wave ping and a greater octave range.
                    </li>
                </ul>
                <p>
                    All notes were randomized on a pentatonic scale. The web building process creates a natural structure to the sounds, so that
                    the spiral notes get slower as they get farther away from the center and each thread is longer, and then get faster again as they
                    converge back into the center. The web spinning speed also determines how fast everything plays.
                </p>
                <p>
                    Other sonification schemes were tested as well, but due to the limits of Web Audio, having too many nodes playing at once strains
                    the browser. Thus, excessive layering, sustained notes, and polyphony was avoided.
                </p>
            </>
    }
]

const OrbWeaver: Project = {
    title: title,
    dateRange: dateRange,
    summary: summary,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default OrbWeaver;

