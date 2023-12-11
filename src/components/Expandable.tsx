import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState } from "react"
import Heading from "./Heading";
import exp from "constants";

const StyledExpandable = styled.div<{$expanded: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* border: ${props => props.$expanded ? "" : "solid"};
    box-sizing: border-box;
    padding: 20px; */

    .expandableHeader {
        display: flex;
        gap: 20px;
        /* justify-content: space-between; */
        
        &:hover {
            color: ${props => props.theme.accent};
            cursor: pointer;
        }
    }

    .arrow {
        color: ${props => props.theme.accent}
    }

    .summary {
        font-style: italic;
    }
`

function Expandable({ heading, summary, children }: { heading: string, summary: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    const [expanded, setExpanded] = useState(true);
    return (<StyledExpandable $expanded={expanded} >
        <div className={"expandableHeader"} onClick={() => { setExpanded(!expanded) }} >
            <div className={"arrow"}><Heading level={3}>{expanded ? "⋀" : "⋁"}</Heading></div><Heading level={3} ref={ref}>{heading}</Heading>
        </div>
        {expanded ? children : <p className={"summary"}>{summary.length > 0 ? summary + "…" : ""}</p>}
    </StyledExpandable>);
}

export default forwardRef(Expandable);