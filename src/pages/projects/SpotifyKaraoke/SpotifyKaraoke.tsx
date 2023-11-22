import styled from "styled-components";
import Heading from "../../../components/Heading";
import Sidebar from "../../../components/Sidebar";
import { useRef } from "react"
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";

const StyledPage = styled.div`
    display: flex;
    gap: 20px;

    .projectContents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

function SpotifyKaraoke() {
    const headings = ["Description", "Problem", "Research"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);

    return (<StyledPage>
        <Sidebar headings={headings} refs={headingRefs.current} />
        <div className={"projectContents"}>
            <ProjectTitle text={"Spotify Karaoke"} subtitle={"Aug–Oct 2023"} link="https://aidn.jp/mikutap/" ref={el => headingRefs.current[0] = el} />
            Spotify Karaoke is a web app that lets you sing along to any song on Spotify with English lyrics.
            <Expandable heading={"Pipeline"} summary={"We have a problem Houston."} ref={el => headingRefs.current[1] = el} >
                Expanded problem is expanded. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.
            </Expandable>
            <Expandable heading={"Algorithm"} summary={"We've done a lot of research."} ref={el => headingRefs.current[2] = el} >
                Research stuff bleh blah blooh blee bleh blah blooh blee bleh blah blooh blee.
            </Expandable>
        </div>
    </StyledPage>);
}

export default SpotifyKaraoke;