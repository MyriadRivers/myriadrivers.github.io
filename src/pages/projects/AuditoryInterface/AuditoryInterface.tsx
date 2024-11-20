import { useEffect, useRef, useState } from "react";
import content from "./content";
import StyledPage from "../../../components/StyledPage";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ProjectTitle from "../../../components/ProjectTitle";
import Expandable from "../../../components/Expandable";

function AuditoryInterface() {
    const headings = content.sections.map((section) => section.shortTitle);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} contentScrollTop={scrollRef ? scrollRef.scrollTop : 0} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            {content.sections.map((section, index) => {
                if (index === 0) {
                    return (
                        <ProjectTitle
                            text={content.title}
                            subtitle={content.dateRange}
                            links={content.links}
                            tags={content.tags}
                            ref={el => headingRefs.current[index] = el}
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

export default AuditoryInterface;