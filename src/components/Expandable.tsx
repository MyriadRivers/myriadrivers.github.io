import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState } from "react"
import Heading from "./Heading";

const StyledExpandable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .expandableHeader {
        display: flex;
        gap: 20px;
        /* justify-content: space-between; */
    }

    .arrow {
        color: ${props => props.theme.accent}
    }
`

function Expandable({ heading, summary, children }: { heading: string, summary: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    const [expanded, setExpanded] = useState(false);
    return (<StyledExpandable onClick={() => { setExpanded(!expanded) }}>
        <div className={"expandableHeader"}>
            <div className={"arrow"}><Heading level={3}>{expanded ? "⋀" : "⋁"}</Heading></div><Heading level={3} ref={ref}>{heading}</Heading>
        </div>
        {expanded ? children : summary}
    </StyledExpandable>);
}

export default forwardRef(Expandable);