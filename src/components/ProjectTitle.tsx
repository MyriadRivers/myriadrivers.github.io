import styled from "styled-components";
import Heading from "./Heading";
import { Ref, forwardRef } from "react"
import Canvas from "./Canvas";

const StyledProjectTitle = styled.div`
    color: black;

    .titleContainer {
        font-family: ${props => props.theme.headerFont};

        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 6pt;

        /* outline: solid; */
        /* border: solid; */

        padding: 15px;
    }

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
        <Canvas>
            <div className={"titleContainer"}>
                <div className={"title"}>
                    {text}
                    <a className={"link"} href={link}>
                        *
                    </a>
                </div>
                <div className={"subtitle"}>
                    {subtitle}
                </div>
            </div>
        </Canvas>
    </StyledProjectTitle>);
}

export default forwardRef(ProjectTitle);