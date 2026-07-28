import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import demoVideo from "./fan_main.mp4"
import workshop from "./workshop.png"
import sensors from "./sensors.png"
import sketch from "./sketch.png"
import nime from "./nime.png"

import { ReactNode } from "react";
import Link from "../../../components/Link";

import slides from "./fan_slides.pdf";
import Video from "../../../components/Video";
import Timeline from "../../../components/Timeline/Timeline";

const title: string = "Interactive Fan Dance";
const dateRange: string = "January 2025 – May 2026";
const subtitles = [
    { title: "Team", text: "Jason Gao, Shirley Nguyen" },
    { title: "Tools", text: "ATLAS.ti, Figma, Autodesk Fusion, Arduino, Max MSP" }
]
const summary: string = "Bridging traditional dance and interactive technology through a community designed instrument";
const links: Array<{ text: string, url: string }> = [
    { text: "publication", url: "https://zenodo.org/records/20784137" },
    { text: "demo", url: "https://www.youtube.com/watch?v=pXJBmwr2S2s" },
    { text: "slides", url: slides },
];
const media: ReactNode = <Video src={demoVideo} caption="Dancers improvise with the interactive fan." mainImage={true} />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Fan dances are prominent traditional forms in Chinese and Vietnamese cultures,
                    but they are also living practices, what UNESCO terms <b>intangible cultural heritage</b>.
                </p>
                <p>
                    With my research partner Shirley Nguyen and advised by Dr. Alexandria Smith and Dr. Brian Magerko,
                    I led a 3-semester research project, collaborating closely with diasporic communities of Chinese and Vietnamese fan dancers
                    to codesign, build, and test an interactive fan that combines traditional dance with new technological interactions.
                </p>
                <Timeline sections={[
                    {
                        name: "RESEARCH",
                        weeks: 18,
                        events: [
                            "Literature Review",
                            "Document Analysis",
                            "Observations",
                            "Semi-structured Interviews",
                            "Participatory Design Workshop"
                        ]
                    },
                    {
                        name: "ANALYSIS",
                        weeks: 8,
                        events: [
                            "Grounded Theory",
                            "Thematic Analysis",
                        ]
                    },
                    {
                        name: "PHYSICAL DESIGN",
                        weeks: 12,
                        events: [
                            "Form Sketching",
                            "Electronic Prototyping",
                            "3D Modeling and Printing",
                            "Feedback Sessions",
                        ]
                    },
                    {
                        name: "MUSIC DESIGN",
                        weeks: 8,
                        events: [
                            "Max MSP Mapping",
                            "Ableton Sound Design"
                        ]
                    },
                    {
                        name: "EVALUATION",
                        weeks: 2,
                        events: [
                            "Think-aloud Improvisation",
                            "NASA TLX",
                            "Creativity Support Index"
                        ]
                    }
                ]} />
            </>
    },
    {
        shortTitle: "Concept",
        title: "Blending traditional dance and interactive technology",
        summary: "I wanted to expand interactive and modern dance to showcase traditional, non-Western forms.",
        contents:
            <>
                <p>
                    Growing up, a lot of my friends around me learned Chinese dance. I've always loved the grace of the folding fan and the drama of movement,
                    but I never learned to dance myself. I wanted this project to explore the beauty of traditional forms,
                    while also looking towards the future for how we could transform these practices with new capabilities.
                </p>
                <p>
                    I found a partner in Shirley Nguyen, a Vietnamese-American student who shared my passion for exploring tradition and technology.
                    She was close with our university's Vietnamese Student Association, and I was close with the Chinese Student Association, which had an active fan dance team—the Chinese dance team did not.
                    Through these connections, we were able to explore adjacent but distinct cultural practices for a comparative design.
                </p>
            </>
    },
    {
        shortTitle: "Research",
        title: "Research involved deep collaborations with fan dance communities",
        summary: "By observing, interviewing, and working with dance groups, we explored what DANCERS themselves wanted in technology, rather than what we wanted to make for them.",
        contents:
            <>
                <p>
                    Research, approved by our Institutional Review Board's ethics committee,
                    involved <b>observations</b> of the practices and performances of our partner dance groups;
                    1–2 hour one-on-one <b>interviews</b> with 20 dancers, exploring their identity, relationship with dance,
                    and expectations and hopes for technology; a <b>focus group</b> with dance choreographers;
                    repeated <b>validation</b> sessions with dancers throughout the design process;
                    and finally a participatory design <b>workshop</b> exploring fan concepts,
                    choreography, and interaction with 10 dancers.
                </p>
                <p>
                    Shirley and I created a code-book through iterative grounded-theory based analysis of codes and themes from each interview transcript, done in ATLAS.ti.
                </p>
                <Image src={workshop} caption={"A Vietnamese dancer explains her concept and design for a fan."} />
            </>
    },
    {
        shortTitle: "Design",
        title: "Design used the natural affordances of the folding fan",
        summary: "Sensors were embedded in a custom designed folding fan to measure natural properties such as opening and closing, flapping, and gestures, and grip pressure.",
        contents:
            <>
                <p>
                    We ended up designing a single, short-tailed fan, in accordance with the experiences of Chinese fan dancers, who had more experience dancing in solo settings with a single fan—Vietnamese dancers almost always used two fans in group settings.
                </p>
                <p>
                    The guard of the fan features an IMU to measure acceleration and orientation, a force sensitive resistor to measure grip pressure, and a potentiometer in the rivet to measure openness of the leaf. Finally, a button is embedded in the guard, which can be squeezed to trigger a discrete event at any point.
                </p>
                <p>
                    Music design took inspiration from nature, which was a commonly occurring theme in both Chinese and Vietnamese dances. Dancer's are already used to the fan making sounds to accentuate their music through SFX, as the fan opens loudly, so we pushed this metaphor further through sound effects inspired by water.
                </p>
                <Image src={sketch} caption={"Form exploration, sketches, and technical prototyping of function and aesthetics of fan."} />
                <Image src={sensors} caption={"The custom printed guard is sensor embedded for wireless communication with a laptop."} />
            </>
    },
    {
        shortTitle: "Results",
        title: "Dancers were very excited to use the resulting fan.",
        summary: "Dancers loved playing with the final fan. We also published the result in an international conference, NIME 2026.",
        contents:
            <>
                <p>
                    Evaluation involved two Chinese dancers improvising with the fan to a backing track, and then completing two surveys to measure task load and creativity support respectively. Both dancers reported enjoyment and expressiveness to be
                    the highest metrics—they loved experimenting with the fan.
                </p>
                <p>
                    We published the results of our research phase in the international conference for New Interfaces for Musical Expression 2026 in London,
                    which can seen <Link url={"https://nime.org/proc/nime2026_40/index.html"}>here</Link>.
                </p>
                <p>
                    Future work would continue collaboration with the dancers and explore more advanced methods of music interaction, such as applying effects to the backing track or generating synthesized melodies.
                </p>
                <Image src={nime} caption={"Presenting the results of our research at NIME 2026 in London."} />
            </>
    },
]

const Fan: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Fan;

