import styled from "styled-components";
import { Ref, forwardRef, ReactNode } from "react"

const StyledHeading = styled.div<{ $level: number }>`
    background-color: orange;
    
    font-size: ${props => 3 - (props.$level * .5)}em;
    text-transform: uppercase;
    letter-spacing: 10pt;
    
`

function Heading({ level, children }: { level: number, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    return (<StyledHeading $level={level} ref={ref}>
        {children}
    </StyledHeading>);
}

export default forwardRef(Heading);