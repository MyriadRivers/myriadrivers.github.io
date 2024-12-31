import styled from "styled-components";
import { Ref, forwardRef, ReactNode, useState, useEffect } from "react"
import Heading from "./Heading";
import useMedia from "../hooks/useMedia";
import breakpoints from "../styles/breakpoints";
import { ArrowBackIosNew } from "@mui/icons-material";

const StyledExpandable = styled.div<{ $expanded: boolean }>`
    /* background: pink; */
    width: calc(50% - 20px);
    @media ${breakpoints.laptop} {
        width: 100%;
    }

    display: flex;
    flex-direction: column;

    .expandableHeader {
        border-left: solid 3px black;
        padding-left: 20px;

        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;

        &:hover {
            cursor: pointer
        }
    }

    .expandableHeader:hover {
        cursor: pointer;
        border-left: dashed 3px black;
        /* text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 0.5rem;
        text-decoration-style: dashed; */
        
    }
    .arrow {
        cursor: pointer;
        color: ${props => props.theme.accent};
        transform: ${props => props.$expanded ? "rotate(-90deg)" : "rotate(0deg)"};
        transition: transform 200ms;
    }

    .summary {
        font-style: italic;
    }
`

function Expandable({ shortTitle, heading, summary, children }: { shortTitle: string, heading: string, summary: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
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
            <div className={"expandableText"}><Heading level={3} ref={ref}>{mobile ? shortTitle : heading}</Heading></div><div className={"arrow"}><Heading level={3}>{<ArrowBackIosNew />}</Heading></div>
        </div>
        <div className={"expandableContent"}>
            {expanded ? children : <p className={"summary"}>{summary.length > 0 ? summary + "…" : ""}</p>}
        </div>

    </StyledExpandable>);
}

export default forwardRef(Expandable);