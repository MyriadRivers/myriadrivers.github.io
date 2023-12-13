import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";
import StyledPage from "../../../components/StyledPage";

import mainImg from "./sewsustainable.png";
import { main } from "../../../styles/themes";

function SewSustainable() {
    const headings = ["Description", "Problem", "Gamification", "Augmented Reality", "References"];
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
                text={"SewSustainable"} 
                subtitle={"Mar–Apr 2023"} 
                links={[
                    {text: "figma", url: "https://www.figma.com/file/SyeAAZQ1fwMlubLZ7tzdog/Ed-Tech-Project-Prototype?type=design&node-id=0-1&mode=design"}
                ]} 
                ref={el => headingRefs.current[0] = el} 
            >
                <Image src={mainImg} />
                <p>
                    SewSustainable is a hypothetical educational app meant to help people practice more sustainable fashion.
                </p>
            </ProjectTitle>
            <Expandable 
                heading={"Problem"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[1] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <Expandable 
                heading={"Gamification"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[2] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <Expandable 
                heading={"Augmented Reality"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[3] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <Expandable 
                heading={"References"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[4] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default SewSustainable;