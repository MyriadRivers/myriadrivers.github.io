import styled from "styled-components";
import { ReactNode, Ref, forwardRef, useEffect, useRef } from "react"
import Tag from "../Grid/Tag";
import LinkList from "../LinkList";
import breakpoints from "../../styles/breakpoints";
import { ProjectTag } from "../../types";
import Subtitle from "./Subtitle";
import Heading from "../Heading";

const StyledProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    .titleContentContainer {
        display: flex;
        flex-direction: row;
        gap: 40px;
        @media ${breakpoints.laptop} {
            flex-direction: column;
        }
    }

    .titleLeftHalf {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media ${breakpoints.laptop} {
            gap: 10px;
        }
    }

    .titleRightHalf {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
    }

    .titleContainer {
        display: flex;
        flex-direction: column;

        font-family: ${props => props.theme.headerFont};

        font-size: 1.75em;
        @media ${breakpoints.laptop} {
            font-size: 1.5em;
        }
        
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        
    }

    .title {
        display: flex;
        font-weight: bold;
    }

    .subtitleContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .dateRange {
        font-size: calc(min(5pt + 2vw, 16pt));
        letter-spacing: 0.25rem;
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
    subtitles?: Array<{ title: string, text: string }>
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
                {subtitles && <div className={"subtitleContainer"}>
                    {subtitles && subtitles.map((subtitle) =>
                        <Subtitle title={subtitle.title} text={subtitle.text} />)}
                </div>}
                <div className={"titleLinks"}>
                    <LinkList links={links} />
                </div>
            </div>

            <div className={"titleRightHalf"}>
                <div className={"titleSummary"}>
                    <Heading level={3}>{summary}</Heading>
                </div>
                {children}
            </div>
        </div>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);