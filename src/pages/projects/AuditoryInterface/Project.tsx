import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import Image from "../../../components/Image";

function Project() {
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
                text={"Title"} 
                subtitle={"Aug–Dec 2023"} 
                links={[
                    {text: "site", url: "www.example.com"},
                ]} 
                tags={["hci"]}
                ref={el => headingRefs.current[0] = el} 
            >
                <p>
                    Description about the project.
                </p>
            </ProjectTitle>
            <Expandable 
                heading={"About"} 
                summary={"About the app"} 
                ref={el => headingRefs.current[1] = el} 
            >
                Detailed description about the app.
                <Image src={""} caption={`Image of project.`} />
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default Project;