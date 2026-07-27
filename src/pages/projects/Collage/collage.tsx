import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import demoVideo from "./collage.mp4"
import collage from "./collage_main.png"
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";
import Video from "../../../components/Video";

const title: string = "CLIO & MNEMOSYNE";
const dateRange: string = "Mar 2025 – May 2025";
const subtitles = [
    { title: "Tools", text: "Ableton Live, Max MSP, Arduino" },
    { title: "Materials", text: "Conductive fabric, sheet metal, vinyl, conductive thread, fabric" }
]
const summary: string = "Interactive collaged instrument reflecting on personal identity and memory";
const links: Array<{ text: string, url: string }> = [
    // { text: "front-end GitHub", url: "https://github.com/MyriadRivers/myriadrivers.github.io" }
];
const media: ReactNode = <Video src={demoVideo} caption="Concert performance of the collage." mainImage={true} />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Mnemosyne is the Greek goddess of memory, and Clio is the muse of history. Their relationship is one of mother and daughter.
                </p>
                <p>
                    CLIO & MNEMOSYNE is hand sewn from conductive fabric, water-jet sheet metal, vinyl, conductive thread, and traditional textiles.
                </p>
                <p>
                    Employing a combination of <b>capacitive touch</b> from the naturally conductive materials, <b>piezoelectric disks</b> embedded underneath sewn patches, 
                    and <b>pressure sensors</b> created through velostat sandwiched between conductive fabric, 
                    the collage transforms the physical touch of my actual memories, history, conversations, and identity into music,
                    drawing from traditional instrumentation and recordings of my mother and family. 
                </p>
                <p>
                    An additional <b>potentiometer</b> on the side of the frame allows for modulation of played sounds. 
                    The sound design is done through Ableton Live, and interactions are processed through Max MSP and an Arduino embedded in the back of the collage.
                </p>
                <Image src={collage} caption={"Wires are hidden behind fabric, connecting to an Arduino in the back of the frame."} />
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

const Collage: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Collage;

