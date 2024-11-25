import { useEffect, useRef, useState } from "react";
import StyledPage from "./StyledPage";
import Sidebar from "./Sidebar/Sidebar";
import ProjectTitle from "./ProjectTitle";
import Expandable from "./Expandable";
import { Project } from "../types";

function ProjectPage({ content }: { content: Project }) {
    const headings = content.sections.map((section) => section.shortTitle);
    const [activeHeading, setActiveHeading] = useState<number>(0);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    const setActiveHeader = () => {
        if (!headingRefs.current || !headingRefs.current[0] || !scrollRef) return;
        for (let i = 0; i < headingRefs.current.length; i++) {
            let headingRef = headingRefs.current[i];
            let offsetTop = headingRef ? headingRef.offsetTop : 0;
            if (scrollRef.scrollTop >= offsetTop - headingRefs.current[0].offsetTop) { setActiveHeading(i) };
        }
    }

    return (<StyledPage>
        <Sidebar headings={headings} activeHeading={activeHeading} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef} onScroll={setActiveHeader}>
            {content.sections.map((section, index) => {
                if (index === 0) {
                    return (
                        <ProjectTitle
                            text={content.title}
                            subtitle={content.dateRange}
                            links={content.links}
                            tags={content.tags}
                            mainMedia={content.media}
                            ref={el => headingRefs.current[index] = el}
                            key={index}
                        >
                            {section.contents}
                        </ProjectTitle>
                    )
                } else {
                    return (
                        <Expandable
                            heading={section.title}
                            summary={section.summary ?? ""}
                            ref={el => headingRefs.current[index] = el}
                            key={index}
                        >
                            {section.contents}
                        </Expandable>
                    )
                }
            })}
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default ProjectPage;