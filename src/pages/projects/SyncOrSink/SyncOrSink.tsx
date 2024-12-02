import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./title_screen.png";
import gameplayImage from "./gameplay.png";
import levelEditorImage from "./level_editor.png";
import { ReactNode } from "react";

const title: string = "Sync or Sink";
const dateRange: string = "Jun 2017 – Dec 2019";
const subtitles = [
    { title: "Team", text: "Jason Gao, Sean Choi, Alice Hayes, Angie Chen, Catherine Sun, William Choi" },
    { title: "My Role", text: "Development of dialogue system, illustration of level editor and title screen, composition of 90% of music" },
    { title: "Tools", text: "C#, Unity, FL Studio, Adobe Photoshop" }
]
const summary: string = "A rhythm game about artistic swimming!";
const links: Array<{ text: string, url: string }> = [
    { text: "play the demo!", url: "https://amarantgames.itch.io/sync-or-sink-dreamhack-demo" }
];
const tags: Array<ProjectTag> = [
    ProjectTag.fun
];
const media: ReactNode = <Image src={mainImage} mainImage={true} />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Sync or Sink is a rhythm game with visual novel elements, following five friends who make up their school's artistic swimming team.
                    In each level, the team performs a routine in front of a panel judges, as they try to make their way to the top of the conference.
                </p>
                <p>
                    Sync or Sink was the second game that I made with friends after an initial dungeon puzzler called "Slime Travel". It was initially
                    made for a Technology Student Association competition in high school, in which the theme that
                    year was "sports" games. We decided to make a game based off of synchronized swimming.
                </p>
                <p>
                    The full game includes a custom editor to make custom levels as well as 7 more levels of much harder difficulty;
                    however, this version was never publicly released.
                </p>
            </>
    },
    {
        shortTitle: "Awards",
        title: "An award-winning student game",
        summary: "Sync or Sink was the second game made among a group of friends",
        contents:
            <>

                <p>
                    Sync or Sink ranked 1st in the Georgia TSA state conference and 3rd in the national conference. During college, additional features
                    were added including a story mode. The game was also selected to demo at various exhibits such as DreamHack Atlanta's Student Game Showcase and SIEGE Con.
                </p>
                <Image src={gameplayImage} caption={"Gameplay is a 4-lane rhythm game with modifiers. Swimmers dance to the music on the bottom."} />
                <Image src={levelEditorImage} caption={"The unreleased level editor for making custom beat maps and choreographing routines, assets drawn by me."} />
            </>
    }
]

const SyncOrSink: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default SyncOrSink;

