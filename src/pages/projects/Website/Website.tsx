import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./website_main.png"
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";

const title: string = "Personal Website";
const dateRange: string = "Nov 2023 – Present";
const subtitles = [
    { title: "Tools", text: "TypeScript, React.js" }
]
const summary: string = "Personal, usable, and playful";
const links: Array<{ text: string, url: string }> = [
    { text: "front-end GitHub", url: "https://github.com/MyriadRivers/myriadrivers.github.io" }
];
const media: ReactNode = <Image src={mainImage} mainImage />
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    My website functions as a portfolio of my work, an archive of my personal projects, and a playground for experimentation.
                </p>
                <p>
                    I wanted my website to focus on usability, streamlining information architecture, navigation, and flow, while still maintaining playful dynamics.
                    I designed my site to be completely black and white, forcing me to rely on other visual indicators for contrast and hierarchy.
                    This also allows me add color through ubiquitous user interaction while ensuring that nothing is completely obscured.
                </p>
                <p>
                    Coding my own website gives me the level of control necessary to ensure everything looks and behaves exactly how I want it to—meaning
                    my site can be the most authentic reflection of myself, my aesthetics, and my personality. As I continuously grow, so too will my site evolve;
                    it is a perpetual project that will change with me.
                </p>
                <p>
                    My logo features the negative space of a stylized 川 character, my name in Chinese. My heritage, in both the scale of my culture at large
                    and the scale of my family, is a constant theme in my work and a source of strength and pride for myself.
                </p>
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

const Website: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Website;

