import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState, useEffect } from "react"
import Heading from "./Heading";
import useMedia from "../hooks/useMedia";
import breakpoints from "../styles/breakpoints";

const StyledExpandable = styled.div<{ $expanded: boolean }>`
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
            font-style: ${props => props.theme.type === "monochrome" ? "italic" : ""};
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
    const mobile = useMedia(`${breakpoints.mobile}`);

    useEffect(() => {
        // Default to collapsed in mobile view for easier scrolling
        if (mobile) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }, [mobile])

    return (<StyledExpandable $expanded={expanded} >
        <div className={"expandableHeader"} onClick={() => { setExpanded(!expanded) }} >
            <div className={"arrow"}><Heading level={3}>{expanded ? "⋁" : "ᐳ"}</Heading></div><Heading level={3} ref={ref}>{heading}</Heading>
        </div>
        {expanded ? children : <p className={"summary"}>{summary.length > 0 ? summary + "…" : ""}</p>}
    </StyledExpandable>);
}

export default forwardRef(Expandable);