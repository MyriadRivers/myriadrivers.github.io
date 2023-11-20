import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState } from "react"
import Heading from "./Heading";

const StyledExpandable = styled.div`
    background: forestgreen;
`

function Expandable({ heading, summary, children }: { heading: string, summary: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    const [expanded, setExpanded] = useState(false);
    return (<StyledExpandable onClick={() => { setExpanded(!expanded) }}>
        <Heading text={heading} level={1} ref={ref} />
        {expanded ? children : summary}
    </StyledExpandable>);
}

export default forwardRef(Expandable);