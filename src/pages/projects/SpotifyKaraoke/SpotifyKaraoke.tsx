import styled from "styled-components";
import Heading from "../../../components/Heading";
import Sidebar from "../../../components/Sidebar";
import { useRef } from "react"
import Expandable from "../../../components/Expandable";

const StyledPage = styled.div`
    background: pink;
    display: flex;
`

function SpotifyKaraoke() {
    const headings = ["Spotify Karaoke", "Problem", "Research"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);

    return (<StyledPage>
        <Sidebar headings={headings} refs={headingRefs.current} />
        <div>
            <Heading text={"Spotify Karaoke"} level={1} ref={el => headingRefs.current[0] = el} />
            <Expandable heading={"Problem"} summary={"We have a problem Houston."} ref={el => headingRefs.current[1] = el} >
                Expanded problem is expanded. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.
            </Expandable>
            <Expandable heading={"Research"} summary={"We've done a lot of research."} ref={el => headingRefs.current[2] = el} >
                Research stuff bleh blah blooh blee bleh blah blooh blee bleh blah blooh blee.
            </Expandable>
        </div>
    </StyledPage>);
}

export default SpotifyKaraoke;