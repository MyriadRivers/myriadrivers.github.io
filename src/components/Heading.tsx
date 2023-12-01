import styled from "styled-components";
import { Ref, forwardRef, ReactNode } from "react"
import Canvas from "./Canvas";

const StyledHeading = styled.div<{ $level: number }>`
    color: black;
    display: flex;
    flex-direction: column;

    font-family: ${props => props.theme.headerFont};

    font-size: ${props => 3 - (props.$level * .5)}em;
    text-transform: uppercase;
    letter-spacing: 6pt;

    /* outline: solid; */
    /* border: solid; */

    padding: 15px;
`

function Heading({ level, subtitle, children }: { level: number, subtitle?: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    return (<Canvas>
        <StyledHeading $level={level} ref={ref}>
            {children}
            <div className={"subtitle"}>
                {subtitle}
            </div>
        </StyledHeading>
    </Canvas>);
}

export default forwardRef(Heading);