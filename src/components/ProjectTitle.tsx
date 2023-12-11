import styled from "styled-components";
import Heading from "./Heading";
import { ReactNode, Ref, forwardRef } from "react"
import Canvas from "./Canvas";
import Image from "./Image";

const StyledProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .titleContainer {
        font-family: ${props => props.theme.headerFont};

        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 6pt;

        padding-top: 15px;
    }

    .title {
        display: flex;
    }

    .subtitle {
        font-size: 16pt;
        letter-spacing: 4pt;
    }

    .titleLinks {
        color: ${props => props.theme.accent};
        display: flex;
        gap: 20px;
    }

    .titleLink {
        border: solid;
        padding: 5px;
    }
`

function ProjectTitle({ text, 
                        subtitle, 
                        links,
                        children
                    }: { 
                        text: string, 
                        subtitle: string, 
                        links: Array<{text: string, url: string}>,
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
        {children}
        <div className={"titleLinks"}>
        {links.map((link, index) => 
            <a href={link.url} className={"titleLink"} target="_blank">{link.text}↗</a>
        )}
        </div>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);