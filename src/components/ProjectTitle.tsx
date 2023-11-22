import styled from "styled-components";
import Heading from "./Heading";
import { Ref, forwardRef } from "react"

const StyledProjectTitle = styled.div`
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 6pt;

    outline: solid;

    padding: 5px;

    .title {
        display: flex;
    }

    .subtitle {
        font-size: 16pt;
        letter-spacing: 4pt;
    }

    .link {
        color: red;
    }
`

function ProjectTitle({ text, subtitle, link }: { text: string, subtitle: string, link: string }, ref: Ref<HTMLDivElement>) {
    return (<StyledProjectTitle>
        <div className={"title"}>
            {text}
            <a className={"link"} href={link}>
                *
            </a>
        </div>
        <div className={"subtitle"}>
            {subtitle}
        </div>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);