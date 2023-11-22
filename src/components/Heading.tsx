import styled from "styled-components";
import { Ref, forwardRef, ReactNode } from "react"

const StyledHeading = styled.div<{ $level: number }>`
    display: flex;
    flex-direction: column;

    font-size: ${props => 3 - (props.$level * .5)}em;
    text-transform: uppercase;
    letter-spacing: 6pt;

    outline: solid;

    padding: 5px;
`

function Heading({ level, subtitle, children }: { level: number, subtitle?: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    return (<StyledHeading $level={level} ref={ref}>
        {children}
        <div className={"subtitle"}>
            {subtitle}
        </div>
    </StyledHeading>);
}

export default forwardRef(Heading);