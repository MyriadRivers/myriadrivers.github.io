import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState, useEffect } from "react"
import Heading from "./Heading";
import useMedia from "../hooks/useMedia";
import breakpoints from "../styles/breakpoints";

const StyledExpandable = styled.div<{ $expanded: boolean }>`
    width: calc(50% - 20px);
    @media ${breakpoints.laptop} {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    gap: 20px;

    /* padding-top: 40px; */
    /* border: ${props => props.$expanded ? "" : "solid"};
    box-sizing: border-box;
    padding: 20px; */

    .expandableHeader {
        display: flex;
        gap: 20px;
        justify-content: space-between;

        &:hover {
            cursor: pointer
        }
    }

    .expandableHeader:hover .expandableText {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 0.5rem;
        text-decoration-style: dashed;
    }

    .arrow {
        cursor: pointer;
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
            <div className={"expandableText"}><Heading level={3} ref={ref}>{heading}</Heading></div><div className={"arrow"}><Heading level={3}>{expanded ? "⋁" : "ᐸ"}</Heading></div>
        </div>
        {expanded ? children : <p className={"summary"}>{summary.length > 0 ? summary + "…" : ""}</p>}
    </StyledExpandable>);
}

export default forwardRef(Expandable);