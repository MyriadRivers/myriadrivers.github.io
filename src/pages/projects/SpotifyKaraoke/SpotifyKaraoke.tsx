import Heading from "../../../components/Heading";
import Sidebar from "../../../components/Sidebar";
import { useRef } from "react"

function SpotifyKaraoke() {
    const headings = ["Spotify Karaoke", "Problem", "Research"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);

    return (<div>
        <Sidebar headings={headings} refs={headingRefs.current} />
        <Heading text={"Spotify Karaoke"} level={1} ref={el => headingRefs.current[0] = el} />
        <Heading text={"Problem"} level={1} ref={el => headingRefs.current[1] = el} />
        <Heading text={"Research"} level={1} ref={el => headingRefs.current[2] = el} />
    </div>);
}

export default SpotifyKaraoke;