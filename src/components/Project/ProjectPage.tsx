import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProjectTitle from "./ProjectTitle";
import Expandable from "../Expandable";
import { Project, ProjectTag } from "../../types";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const StyledPage = styled.div<{ $paddingLeft: number }>`
    display: flex;
    gap: 20px;
    height: 100%;

    .sidebarContainer {
        position: fixed;
    }

    .projectContents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        align-items: end;

        height: 100%;
        padding-left: ${props => props.$paddingLeft > 0 ? `calc(${props.$paddingLeft}px + 40px)` : "0px"};

        @media ${breakpoints.mobile} {
            padding: 0px; 
        }

        scroll-behavior: smooth;
    }

    .fr, .nfr, .findings, .references {
        counter-reset: list-counter;
        list-style: none;

        li {
            counter-increment: list-counter;
            display: flex;
            align-items: flex-start;
        }

        li:before{
            font-weight: bold;
            align-self: flex-start;
        }
    }

    .findings li:before {
        content: "F" counter(list-counter) ".\\00a0" ;
        white-space: nowrap;
    }

    .nfr li:before {
        content: "NFR " counter(list-counter) ".\\00a0" ;
        white-space: nowrap;
    }

    .fr li:before {
        content: "FR " counter(list-counter) ".\\00a0" ;
        white-space: nowrap;
    }   

    .references li:before {
        content: "[" counter(list-counter) "]\\00a0" ;
        white-space: nowrap;
    }

    .bottomSpace {
        min-height: 150px;
    }

    /* overflow: hidden; */
`

function ProjectPage({ tags, content }: { tags: Array<ProjectTag>, content: Project }) {
    const headings = content.sections.map((section) => section.shortTitle);
    const [activeHeading, setActiveHeading] = useState<number>(0);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const pageTopOffset = useRef<number>(0);
    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
    const [contentLeftPadding, setContentLeftPadding] = useState<number>(0);

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" } as unknown as ScrollToOptions);

        setScrollRef(contentsRef.current);

        if (!sidebarContainerRef.current) return;
        const sidebarResizeObserver = new ResizeObserver((size) => {
            let rect = size[0].contentRect;
            setContentLeftPadding(rect.width);
        })
        sidebarResizeObserver.observe(sidebarContainerRef.current);
        setContentLeftPadding(sidebarContainerRef.current.clientWidth);

        window.addEventListener("scroll", setActiveHeader);
    }, [])

    const setActiveHeader = () => {
        console.log(pageTopOffset.current);
        // if (!headingRefs.current || !pageTopOffset) return;
        for (let i = 0; i < headingRefs.current.length; i++) {
            let headingRef = headingRefs.current[i];
            let offsetTop = headingRef ? headingRef.offsetTop : 0;
            if (window.scrollY >= offsetTop - pageTopOffset.current) { setActiveHeading(i) };
        }
    }

    return (<StyledPage $paddingLeft={contentLeftPadding}>
        <div className={"sidebarContainer"} ref={sidebarContainerRef}>
            <Sidebar headings={headings} activeHeading={activeHeading} pageTop={pageTopOffset.current} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        </div>
        <div className={"projectContents"} ref={contentsRef}>
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
                                tags={tags}
                                setPageTop={(value: number) => pageTopOffset.current = value}
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
            <div className={"bottomSpace"}>&nbsp;</div>
        </div>
    </StyledPage>);
}

export default ProjectPage;