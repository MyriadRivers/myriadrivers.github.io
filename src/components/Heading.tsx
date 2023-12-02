import styled from "styled-components";
import { Ref, forwardRef, ReactNode } from "react"
import Canvas from "./Canvas";

const StyledHeading = styled.div<{ $level: number }>`
    /* background: ${props => props.theme.main};
    color: ${props => props.theme.alt}; */

    display: flex;
    flex-direction: column;

    font-family: ${props => props.theme.headerFont};

    font-size: ${props => 3 - (props.$level * .5)}em;
    text-transform: uppercase;
    letter-spacing: 6pt;

    padding: 15px 0px;
`

function Heading({ level, subtitle, children }: { level: number, subtitle?: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    return (
    <StyledHeading $level={level} ref={ref}>
        {children}
        <div className={"subtitle"}>
            {subtitle}
        </div>
    </StyledHeading>);
}

export default forwardRef(Heading);