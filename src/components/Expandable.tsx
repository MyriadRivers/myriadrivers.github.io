import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState } from "react"
import Heading from "./Heading";

const StyledExpandable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

function Expandable({ heading, summary, children }: { heading: string, summary: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    const [expanded, setExpanded] = useState(false);
    return (<StyledExpandable onClick={() => { setExpanded(!expanded) }}>
        <Heading level={3} ref={ref}>{heading}</Heading>
        {expanded ? children : summary}
    </StyledExpandable>);
}

export default forwardRef(Expandable);