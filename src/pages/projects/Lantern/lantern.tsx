import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./lantern_main.png"
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";
import papermaking from "./papermaking.png"
import swaps from "./swaps.png"

const title: string = "SHADĒNG";
const dateRange: string = "Mar 2025 – May 2025";
const subtitles = [
    { title: "Tools", text: "Autodesk Fusion" },
    { title: "Materials", text: "LED strips, PLA filament, handmade bamboo paper" }
]
const summary: string = "Modular mood lantern founded on traditional crafts";
const links: Array<{ text: string, url: string }> = [
    // { text: "front-end GitHub", url: "https://github.com/MyriadRivers/myriadrivers.github.io" }
];
const media: ReactNode = <Image src={mainImage} mainImage />
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    SHADĒNG, from shade and 灯 (dēng, "lamp"), is a modular mood lantern that showcases the beauty and individuality of paper.
                </p>
                <p>
                    For this project, I learned how to make bamboo paper by hand, from harvesting the old shoots, to mashing and boiling the pulp, to the final drying of sheets.
                </p>
                <p>
                    The lantern takes inspiration from three traditional crafts: papermaking, paper cutting, and shadow puppetry. 
                </p>
                <p>
                    Slots within the lantern's frame allow for both the diffusing paper and the shadow stencil to be easily swapped for different combinations and moods.
                </p>
                <Image src={papermaking} caption={"Bamboo paper from harvest to finished sheet."} />
                <Image src={swaps} caption={"Both paper and stencil can be swapped or removed easily."} />
            </>
    },
    // {
    //     shortTitle: "Design",
    //     title: "Bringing together physical prototyping and music",
    //     summary: "The composition was performed using Ableton Live and an Arduino controller",
    //     contents:
    //         <>
    //             <p>
    //                 A custom controller was built using an Arduino, an ultrasonic sensor, and a slide potentiometer.
    //                 Gliding a finger along the potentiometer and altering the distance of an object to the ultrasonic sensor would trigger different
    //                 samples in different groupings using Ableton's Session View.
    //             </p>
    //             <p>
    //                 The signals from the controller were used to control Ableton's parameters through a custom Max MSP plugin.
    //             </p>
    //         </>
    // }
]

const Lantern: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Lantern;

