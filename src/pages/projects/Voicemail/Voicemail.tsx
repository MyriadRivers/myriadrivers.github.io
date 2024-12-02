import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import maxImage from "./max_patch.png";
import arduinoImage from "./arduino.png";
import VoicemailCanvas from "../../../components/VoicemailCanvas";
import SoundCloudSmall from "../../../components/SoundCloudSmall";
import { ReactNode } from "react";
import SoundCloudLarge from "../../../components/SoundCloudLarge";

const title: string = "Voicemail";
const dateRange: string = "Mar 2022";
const subtitles = [
    { title: "Tools", text: "Ableton Live, Max MSP, Arduino, TypeScript" }
]
const summary: string = "A programmatic piece performed with Arduino";
const links: Array<{ text: string, url: string }> = [
];
const tags: Array<ProjectTag> = [
    ProjectTag.engineering
];
const media: ReactNode = <SoundCloudSmall
    artist={"Jason Gao"}
    track={"Voicemail"}
    artistURL={"https://soundcloud.com/myriadrivers-558554438"}
    trackURL={"https://soundcloud.com/myriadrivers-558554438/voicemail?si=819715ce8d3d46ffa1ac10c1e0c78f4d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"}
    trackID={"1694478468"}
/>
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    This composition features a range of cellphone sounds arranged and editted in Ableton Live,
                    which were then layered and sequenced randomly through live performance on physical controller.
                    The accompanying image features randomly generated phone numbers in TypeScript.
                </p>
            </>
    },
    {
        shortTitle: "Design",
        title: "Bringing together physical prototyping and music",
        summary: "The composition was performed using Ableton Live and an Arduino controller",
        contents:
            <>
                <p>
                    A custom controller was built using an Arduino, an ultrasonic sensor, and a slide potentiometer.
                    Gliding a finger along the potentiometer and altering the distance of an object to the ultrasonic sensor would trigger different
                    samples in different groupings using Ableton's Session View.
                </p>
                <p>
                    The signals from the controller were used to control Ableton's parameters through a custom Max MSP plugin.
                </p>
                <Image src={arduinoImage} caption={`The controller made from an Arduino.`} />
                <Image src={maxImage} caption={`The Max MSP patch that controls Ableton.`} />
            </>
    },
    // {
    //     shortTitle: "Art",
    //     title: "Art",
    //     summary: "The art for the track was generated randomly on an HTML Canvas with TypeScript",
    //     contents:
    //         <>
    //             <p>
    //                 The track art consists of a bunch of randomly generated phone numbers. You can make your own below!
    //             </p>
    //             <VoicemailCanvas />
    //         </>
    // }
]

const Voicemail: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default Voicemail;

