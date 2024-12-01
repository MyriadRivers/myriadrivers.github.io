import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProjectTitle from "./ProjectTitle";
import Expandable from "../Expandable";
import { Project } from "../../types";
import styled from "styled-components";

const StyledPage = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;

    .projectContents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        align-items: end;

        height: 100%;
        overflow: auto;

        padding: 0px 60px 0px 40px;
        scroll-behavior: smooth;
    }

    .bottomSpace {
        min-height: 100px;
    }

    .references {
        counter-reset: list-counter;
        list-style: none;
        padding-left: 0px;

        li {
            counter-increment: list-counter;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        li:before{
            content: "[" counter(list-counter) "] ";
            align-self: flex-start;
            margin-right: 20px;
        }
    }

    overflow: hidden;
`

function ProjectPage({ content }: { content: Project }) {
    const headings = content.sections.map((section) => section.shortTitle);
    const [activeHeading, setActiveHeading] = useState<number>(0);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [pageTopOffset, setPageTopOffset] = useState<number | null>(null);
    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    const setActiveHeader = () => {
        if (!headingRefs.current || !scrollRef || !pageTopOffset) return;
        for (let i = 0; i < headingRefs.current.length; i++) {
            let headingRef = headingRefs.current[i];
            let offsetTop = headingRef ? headingRef.offsetTop : 0;
            if (scrollRef.scrollTop >= offsetTop - pageTopOffset) { setActiveHeading(i) };
        }
    }

    return (<StyledPage>
        <Sidebar headings={headings} activeHeading={activeHeading} pageTop={pageTopOffset} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef} onScroll={setActiveHeader}>
            {content.sections.map((section, index) => {
                if (index === 0) {
                    return (
                        <>
                            <ProjectTitle
                                text={content.title}
                                dateRange={content.dateRange}
                                subtitles={content.subtitles}
                                summary={content.summary}
                                media={content.media}
                                links={content.links}
                                tags={content.tags}
                                setPageTop={setPageTopOffset}
                                ref={el => headingRefs.current[index] = el}
                                key={index}
                            >
                                {section.contents}
                            </ProjectTitle>
                        </>

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