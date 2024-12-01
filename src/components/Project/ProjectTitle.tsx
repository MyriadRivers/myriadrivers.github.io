import styled from "styled-components";
import { ReactNode, Ref, forwardRef, useEffect, useRef } from "react"
import Tag from "../Grid/Tag";
import LinkList from "../LinkList";
import breakpoints from "../../styles/breakpoints";
import { ProjectTag } from "../../types";
import Subtitle from "./Subtitle";

const StyledProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .titleContentContainer {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    .titleLeftHalf {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .titleRightHalf {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .titleContainer {
        display: flex;
        flex-direction: column;

        font-family: ${props => props.theme.headerFont};

        font-size: 1.75em;
        @media ${breakpoints.laptop} {
            font-size: 1.35em;
        }
        
        text-transform: uppercase;
        letter-spacing: 6pt;
        
    }

    .title {
        display: flex;
    }

    .subtitleContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .titleSummary {
        font-weight: bold;
        font-size: 1.25em;
    }

    .dateRange {
        font-size: calc(min(5pt + 2vw, 16pt));
        letter-spacing: 4pt;
    }

    .titleLinks {
        font-size: calc(min(5pt + 2vw, 16pt));

        color: ${props => props.theme.accent};
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }

    .titleLink {
        border: solid;
        padding: 5px;
    }

    .tags {
        padding: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        pointer-events: none;
    }
`

function ProjectTitle({ 
    text,
    dateRange,
    subtitles,
    summary,
    media,
    links,
    tags,
    setPageTop,
    children
}: {
    text: string,
    dateRange: string,
    subtitles?: Array<{title: string, text: string}>
    summary: string,
    media?: ReactNode,
    links: Array<{ text: string, url: string }>,
    tags: Array<ProjectTag>,
    setPageTop: Function,
    children: ReactNode
}, ref: Ref<HTMLDivElement>) {
    const pageTopRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setPageTop(pageTopRef.current?.offsetTop);
    }, [pageTopRef.current])

    return (<StyledProjectTitle ref={pageTopRef}>
        {
            media
        }
        <div className={"tags"}>
            {tags.map((tag, index) => (
                <Tag name={tag} key={index} />
            ))}
        </div>
        <div className={"titleContentContainer"}>
            <div className={"titleLeftHalf"}>
                <div className={"titleContainer"}>
                    <div className={"title"} ref={ref}>
                        {text}
                    </div>
                    <div className={"dateRange"}>
                        {dateRange}
                    </div>
                </div>
                <div className={"subtitleContainer"}>
                    {subtitles && subtitles.map((subtitle) => 
                    <Subtitle title={subtitle.title} text={subtitle.text}/>)}
                </div>
                <div className={"titleLinks"}>
                    <LinkList links={links} />
                </div>
            </div>
                
            <div className={"titleRightHalf"}>
                <div className={"titleSummary"}>
                    {summary}
                </div>
                {children}
            </div>
        </div>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);