import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./main_image.png";
import issImage from "./iss.png";
import layoutImage from "./layout.png";
import scriptImage from "./script.png";
import exampleVideo from "./control_vs_dr.mp4";
import MediaFlex from "../../../components/MediaFlex";

const title: string = "NASA Diminished Reality";
const dateRange: string = "Jun 2021–May 2022";
const links: Array<{ text: string, url: string }> = [];
const tags: Array<ProjectTag> = [
    ProjectTag.uiux
];
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <Image src={mainImage} />
                <p>
                    NASA funded study on using diminished reality (DR) to focus during highly distracting scenarios. Scenario and testing environment
                    developed by me using C# in Unity3D.
                </p>
            </>
    },
    {
        shortTitle: "Motivation",
        title: "Motivation",
        summary: "Extended Reality can help NASA astronauts train for difficult and distracting scenarios on missions",
        contents:
            <>
                <p>
                    Astronauts can often be put in highly distracting scenarios where the success of a mission depends on their ability to focus or keep
                    track of many different things at once. For instance, the interior walls of the small corridors in the ISS are extremely cluttered.
                </p>
                <Image src={issImage} caption={`Inside of the ISS, source: NASA & ASI`} />
                <p>
                    For this reason, we designed an exploratory study to investigate using diminished reality to help astronauts focus on the important things
                    during a mission. Unlike augmented reality, which imposes virtual objects or phenomena onto real space, the idea with diminished reality is
                    to remove or attenuate unnecessary stimuli from the space, letting the subject focus only on the information they immediately need for their
                    task.
                </p>
            </>
    },
    {
        shortTitle: "Scenario",
        title: "Scenario",
        summary: "The subject must construct a ventilator while an emergency scenario unfolds onboard a spacecraft",
        contents:
            <>
                <p>
                    In the study, the subject assumes the role of Mission Specialist aboard the Mars Transit Vehicle (MATV).
                    The spacecraft is damaged, and the subject must quickly and accurately follow instructions to construct a ventilator
                    for an injured crewmate while the other members of the crew deal with the situation.
                </p>
                <p>
                    To design a realistic scenario, I researched typical mission terminology and crew composition, and referenced NASA materials and common
                    depictions of missions in order to design a hypothetical spacecraft layout for the study. I also created a script listing the
                    entire timeline of events including visual and auditory distractions, as well as crew dialogue and interactions.
                </p>
                <MediaFlex>
                    <Image src={layoutImage} caption={`Initial draft of the MATV layout, later simplified.`} />
                    <Image src={scriptImage} caption={`Format of the script, featuring distractions and dialogue.`} />
                </MediaFlex>
                <p>
                    Using the layout and the script, I then compiled a complex audio environment with all the auditory distractions in the script, with
                    fellow lab members contributing voices for the dialogue. I also constructed the VR environment within which the entire scenario unfolds,
                    using Unity to script visual distractions such as astronauts floating by and tools on the wall.
                </p>
            </>
    },
    {
        shortTitle: "Study",
        title: "Study Design",
        summary: "The subject balances main task performance with situational awareness in different levels of DR",
        contents:
            <>
                <p>
                    The subject goes through the extremely distracting VR scenario while attempting to construct a ventilator from parts scattered on the walls,
                    following on-screen instructions and facilitated by a study overseer. The scenario is split into three sections, and each section has
                    three possible levels of DR: control, "dumb" DR, and "smart" DR.
                </p>
                <p>
                    The DR techniques vary from a blanket lowpass on all alarm audio in some cases, to more specific filtering of audio that doesn't filter voices,
                    to visual attenuation like decreasing the complexity of the background walls, blurring objects that aren't needed for the task,
                    desaturating the colors and alarms, simplifying floating movement, and making representing parts not needed in the current section as blurred,
                    wire frames, or partially transparent.
                </p>
                <p>
                    Distractions such as alarms, flashing lights, and intercom transmissions usually serve an important purpose—they convey urgent information and
                    are designed to grab your attention; ignoring them can often be dangerous. Thus, the study aims to see what types and degree of DR can best
                    balance <b>situational awareness</b> and <b>performance on the main task</b>.
                </p>
                <Video src={exampleVideo} caption={`Clip comparing control and DR versions, showcasing some of the diminishment strategies.`} />
                <p>
                    Participants go through through all three sections of the scenario, with DR level randomized in an even distribution for each section.
                    At the end of each section, participants also answer questions relating to the scenario and the events that unfolded, such as what section
                    other crewmates were in (mentioned over the intercom), or what objects floated by.
                </p>
                <p>
                    Diminished Reality effectiveness is measured based both on how well the participants do answering the questions and how well they perform the main
                    task without any errors.
                </p>
            </>
    }
]

const content: Project = {
    title: title,
    dateRange: dateRange,
    links: links,
    tags: tags,
    sections: sections
}

export default content;

