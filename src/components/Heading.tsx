import styled from "styled-components";
import { Ref, forwardRef } from "react"

const StyledHeading = styled.div`
    
`

function Heading({ text, level }: { text: string, level: number }, ref: Ref<HTMLDivElement>) {
    return (<StyledHeading ref={ref}>
        {text}
    </StyledHeading>);
}

export default forwardRef(Heading);