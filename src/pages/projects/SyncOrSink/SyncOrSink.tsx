import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import Image from "../../../components/Image";

import mainImage from "./title_screen.png";
import gameplayImage from "./gameplay.png";
import levelEditorImage from "./level_editor.png";

function SyncOrSink() {
    const headings = ["Description", "About"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [contentsRef.current])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle 
                text={"Sync or Sink"} 
                subtitle={"Jun 2017–Dec 2019"} 
                links={[
                    {text: "play the demo!", url: "https://amarantgames.itch.io/sync-or-sink-dreamhack-demo"},
                ]} 
                tags={["fun"]}
                ref={el => headingRefs.current[0] = el} 
            >
                <Image src={mainImage} />
                <p>
                    Sync or Sink is a synchronized swimming rhythm game, developed in Unity with C#. I coded some of the dialogue
                    system, illustrated a few assets, and composed the large majority of the music. 
                </p>
                <p>Team: Jason Gao, Sean Choi, Alice Hayes, Angie Chen, Catherine Sun, William Choi</p>
            </ProjectTitle>
            <Expandable 
                heading={"About"} 
                summary={"Sync or Sink was the second game made among a group of friends"} 
                ref={el => headingRefs.current[1] = el} 
            >
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
                <Image src={gameplayImage} caption={"Gameplay is a 4-lane rhythm game with modifiers. Swimmers dance to the music on the bottom."}/>
                <Image src={levelEditorImage} caption={"The unreleased level editor for making custom beat maps and choreographing routines, assets drawn by me."}/>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default SyncOrSink;