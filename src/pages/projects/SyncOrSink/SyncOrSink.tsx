import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./title_screen.png";
import gameplayImage from "./gameplay.png";
import levelEditorImage from "./level_editor.png";
import { ReactNode } from "react";

const title: string = "Sync or Sink";
const dateRange: string = "Jun 2017–Dec 2019";
const links: Array<{ text: string, url: string }> = [
    { text: "play the demo!", url: "https://amarantgames.itch.io/sync-or-sink-dreamhack-demo" }
];
const tags: Array<ProjectTag> = [
    ProjectTag.fun
];
const media: ReactNode = <Image src={mainImage} />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Sync or Sink is a synchronized swimming rhythm game, developed in Unity with C#. I coded some of the dialogue
                    system, illustrated a few assets, and composed the large majority of the music.
                </p>
                <p>Team: Jason Gao, Sean Choi, Alice Hayes, Angie Chen, Catherine Sun, William Choi</p>
            </>
    },
    {
        shortTitle: "About",
        title: "About",
        summary: "Sync or Sink was the second game made among a group of friends",
        contents:
            <>
                <p>
                    Sync or Sink was the second game that I made with friends after a dungeon puzzler called "Slime Travel". It was initially
                    made for a Technology Student Association competition in high school, in which the theme that
                    year was "sports" games. We decided to make a game based off of synchronized swimming.
                </p>
                <p>
                    We were able to get third place in the Nationals conference, and later on in college we added some more features
                    like a story mode and were selected to demo at various exhibits such as DreamHack Atlanta's Student Game Showcase and SIEGE Con.
                </p>
                <p>
                    The full game actually includes a custom editor to make your own levels as well as 7 more levels of much harder difficulty,
                    however this version was never released publicly.
                </p>
                <Image src={gameplayImage} caption={"Gameplay is a 4-lane rhythm game with modifiers. Swimmers dance to the music on the bottom."} />
                <Image src={levelEditorImage} caption={"The unreleased level editor for making custom beat maps and choreographing routines, assets drawn by me."} />
            </>
    }
]

const SyncOrSink: Project = {
    title: title,
    dateRange: dateRange,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default SyncOrSink;

