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

    .fr, .nfr, .findings, .references, .severity {
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

    .severity {
        counter-reset: list-counter -1;
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

    .severity li:before {
        content: counter(list-counter) ":\\00a0" ;
        white-space: nowrap;
    }   

    .references li:before {
        content: "[" counter(list-counter) "]\\00a0" ;
        white-space: nowrap;
    }

    .bottomSpace {
        min-height: 150px;
    }

    /* overflow: visible; */
`

function ProjectPage({ tags, content }: { tags: Array<ProjectTag>, content: Project }) {
    const headings = content.sections.map((section) => section.shortTitle);
    const [activeHeading, setActiveHeading] = useState<number>(0);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const pageTopOffset = useRef<number>(0);

    const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
    const [contentLeftPadding, setContentLeftPadding] = useState<number>(0);

    const setActiveHeader = () => {
        const scrollContainer = document.querySelector('.outletContainer') as HTMLElement | null;
        if (!scrollContainer) return;

        const scrollPosition = scrollContainer.scrollTop + 20;

        for (let i = 0; i < headingRefs.current.length; i++) {
            const headingRef = headingRefs.current[i];
            if (!headingRef) continue;

            const headingTop = headingRef.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top + scrollContainer.scrollTop;
            if (scrollPosition >= headingTop) {
                setActiveHeading(i);
            }
        }
    }

    useEffect(() => {
        const scrollContainer = document.querySelector('.outletContainer') as HTMLElement | null;
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, left: 0 });
        } else {
            window.scrollTo({ top: 0, left: 0 });
        }

        if (!sidebarContainerRef.current) return;
        const sidebarResizeObserver = new ResizeObserver((size) => {
            let rect = size[0].contentRect;
            setContentLeftPadding(rect.width);
        })
        sidebarResizeObserver.observe(sidebarContainerRef.current);
        setContentLeftPadding(sidebarContainerRef.current.clientWidth);

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", setActiveHeader);
        } else {
            window.addEventListener("scroll", setActiveHeader);
        }

        setActiveHeader();

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", setActiveHeader);
            } else {
                window.removeEventListener("scroll", setActiveHeader);
            }
            sidebarResizeObserver.disconnect();
        };
    }, [])

    return (<StyledPage $paddingLeft={contentLeftPadding}>
        <div className={"sidebarContainer"} ref={sidebarContainerRef}>
            <Sidebar headings={headings} activeHeading={activeHeading} pageTop={pageTopOffset.current} scrollRef={null} headingRefs={headingRefs.current} />
        </div>
        <div className={"projectContents"} ref={contentsRef}>
            {content.sections.map((section, index) => {
                if (index === 0) {
                    return (
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
                    )
                } else {
                    return (
                        <Expandable
                            shortTitle={headings[index]}
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