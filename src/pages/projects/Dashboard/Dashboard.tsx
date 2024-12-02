import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./dashboard_main.png"
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/ux_research_environmental_justice.pdf";

const title: string = "Meetup App Safety";
const dateRange: string = "Aug – Dec 2024";
const subtitles = [
    { title: "Team", text: "Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao" },
    { title: "My Role", text: "User Research, Design" }
]
const summary: string = "How might we empower leaders of fenceline communities to keep their residents engaged and informed about ongoing processes in the fight for environmental justice?";
const links: Array<{ text: string, url: string }> = [
    { text: "Figma", url: "https://www.figma.com/design/HWV9yvvhLUYO5whGoxNYwF/D3---Design?node-id=833-8289&t=Y4G1ywa0NmW0tgEi-1" },
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
                    Fenceline communities, also known as sacrifice zones, are communites situated in extreme proximity to heavily polluting industrial facilities,
                    where residents face disproportionate risks to their health while receiving few benefits from these plants.
                    These communities are often cross-sectionally marginalized and must fight an uphill battle against powerful interests to force regulations or relocation of the facility.
                </p>
                <p>
                    We pursued a 16-week end-to-end UX project involving the research and design of a new system to integrate with Facebook, a tool many of these
                    communities already rely  on. These features aim to help community leaders more effectively mobilize their residents
                    to promote change through grassroots organization.
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

const Dashboard: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Dashboard;

