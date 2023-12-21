import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import SoundCloudSmall from "../../../components/SoundCloudSmall";
import Link from "../../../components/Link";

function NyanCat() {
    const headings = ["Description", "About"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle
                text={"Nyan Cat (Remix)"}
                subtitle={"Feb 2021"}
                links={[
                    { text: "YouTube", url: "https://www.youtube.com/watch?v=ENX0IeDVcl8" },
                ]}
                tags={["fun"]}
                ref={el => headingRefs.current[0] = el}
            >
                <SoundCloudSmall
                    artist={"RIIIVER"}
                    track={"Nyan Cat (Remix)"}
                    artistURL={"https://soundcloud.com/riiivermusic"}
                    trackURL={"https://on.soundcloud.com/uzBBX"}
                    trackID={"979559179"}
                />
                <p>
                    A composition remixing the popular 2011 internet meme <Link url={"https://www.youtube.com/watch?v=2yJgwwDcgV8"}>Nyan Cat</Link>.
                </p>
            </ProjectTitle>
            <Expandable
                heading={"About"}
                summary={"The remix was originally submitted for a competition"}
                ref={el => headingRefs.current[1] = el}
            >
                <p>
                    Nyan Cat was a popular 2011 meme originally featuring a short loop of a cat with a Pop-Tart body, illustrated by Christopher Torres,
                    paired with the song "Nyanyanyanyanyanyanya!" by Japanese producer daniwell.
                </p>
                <p>
                    In 2021, daniwell called for people to submit some remixes of the song to
                    be featured in a 10 year anniversary <Link url={"https://www.youtube.com/watch?v=cAnFYwOu9Js&list=OLAK5uy_nC2NqTyv5O37bPmd5p_ck3WYyGel00-DI"}>album</Link>,
                    so I decided to give it a shot. Unfortunately, my composition wasn't selected.
                </p>
                <p>
                    I tried to take some more creative liberties with the composition rather than sticking with too straight forward of a remix, which usually
                    bores me. I also made the art.
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default NyanCat;