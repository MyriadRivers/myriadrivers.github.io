import styled from "styled-components";
import Heading from "./Heading";
import { Ref, forwardRef } from "react"
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

    .mainImage {
        height: 400px;
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
                        image, 
                        description, 
                        links 
                    }: { 
                        text: string, 
                        subtitle: string, 
                        image: string,
                        description: string, 
                        links: Array<{text: string, url: string}> 
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
        <img src={image} className={"mainImage"}/>
        <p className={"description"}>{description}</p>
        <div className={"titleLinks"}>
        {links.map((link, index) => 
            <a href={link.url} className={"titleLink"}>{link.text}↗</a>
        )}
        </div>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);