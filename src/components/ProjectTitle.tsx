import styled from "styled-components";
import Heading from "./Heading";
import { ReactNode, Ref, forwardRef } from "react"
import Canvas from "./Canvas";
import Image from "./Image";
import Tag from "./Grid/Tag";

const StyledProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .titleContainer {
        font-family: ${props => props.theme.headerFont};

        font-size: calc(min(15pt + 2.5vw, 2em));
        
        text-transform: uppercase;
        letter-spacing: 6pt;

        padding-top: 15px;
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
                        links: Array<{text: string, url: string}>,
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
            {tags.map(tag => (
                <Tag name={tag} />
            ))}
        </div>
        {children}
        {links.length > 0 && <div className={"titleLinks"}>
            {links.map((link, index) => 
                <a href={link.url} className={"titleLink"} target="_blank">{link.text}↗</a>
            )}
        </div>}
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);