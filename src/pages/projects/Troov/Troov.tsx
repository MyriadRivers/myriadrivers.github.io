import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./troov_main.png"
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";

const title: string = "Meetup App Safety";
const dateRange: string = "Aug – Dec 2024";
const subtitles = [
    { title: "Affiliation", text: "Troov" },
    { title: "Team", text: "Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao" },
    { title: "My Role", text: "User Research, Design" }
]
const summary: string = "How might we foster a safe environment on Meetup Apps to promote authentic and meaningful in-person connections?";
const links: Array<{ text: string, url: string }> = [
    { text: "Figma", url: "https://www.figma.com/design/wu8l6Bjnnj8L1RE30EgdGf/R4-Troov---High-Fidelity-Design?node-id=907-20386&t=znfoRD1Qq9CvSgno-1" },
    { text: "research slides", url: researchSlides }
];
const media: ReactNode = <Image src={mainImage} mainImage />
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Dating and Friendship Apps continue to rise in popularity as a way to form interpersonal relationships, especially among young adults.
                    With more people turning to digital means of finding connections, safety is of paramount concern—both on the app and during the actual
                    face-to-face meetup.
                </p>
                <p>
                    We partnered with <Link url={"https://troov.app/"}>troov</Link>, a startup developing a friendship and dating app focused on creating deep,
                    one-on-one connections through in-person activities, in a 16-week end-to-end UX project to research and design ways of promoting a sense of
                    trust and safety on the app.
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

const Troov: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Troov;

