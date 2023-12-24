import styled from "styled-components";
import { ReactNode, Ref, forwardRef } from "react"
import Tag from "./Grid/Tag";
import LinkList from "./LinkList";
import breakpoints from "../styles/breakpoints";

const StyledProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .titleContainer {
        font-family: ${props => props.theme.headerFont};

        font-size: 2em;
        @media ${breakpoints.laptop} {
            font-size: 1.5em;
        }
        
        text-transform: uppercase;
        letter-spacing: 6pt;

        padding-top: calc(4pt + 0.5vw);
    }

    .title {
        display: flex;
    }

    .subtitle {
        font-size: calc(min(5pt + 2vw, 16pt));
        letter-spacing: 4pt;
    }

    .titleLinks {
        color: ${props => props.theme.accent};
        display: flex;
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

function ProjectTitle({ text,
    subtitle,
    links,
    tags,
    children
}: {
    text: string,
    subtitle: string,
    links: Array<{ text: string, url: string }>,
    tags: Array<string>,
    children: ReactNode
}, ref: Ref<HTMLDivElement>) {
    return (<StyledProjectTitle>
        <div className={"titleContainer"}>
            <div className={"title"} ref={ref}>
                {text}
            </div>
            <div className={"subtitle"}>
                {subtitle}
            </div>
        </div>
        <div className={"tags"}>
            {tags.map((tag, index) => (
                <Tag name={tag} key={index} />
            ))}
        </div>
        {children}
        <LinkList links={links} />
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);