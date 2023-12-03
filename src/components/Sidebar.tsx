import styled from "styled-components";
import { Ref } from "react"
import Canvas from "./Canvas";

const StyledSidebar = styled.div`
    display: flex;

    .sidebarContent {
        font-family: ${props => props.theme.headerFont};
        font-size: 18pt;
        text-transform: uppercase;
        letter-spacing: 2pt;
        text-align: right;

        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 20px;
    }
`

function Sidebar({ headings, scrollRef, headingRefs }: { headings: Array<string>, scrollRef: HTMLDivElement | null, headingRefs: Array<HTMLDivElement | null> }) {
    const scrollTo = (element: HTMLElement | null) => {
        if (element && scrollRef && headingRefs[0]) {
            scrollRef.scrollTop = element.offsetTop - headingRefs[0].offsetTop;
        }
    }
    
    return (<StyledSidebar>
        <div className="sidebarContent">
            {headings.map((heading, index) => (
                <div onClick={() => scrollTo(headingRefs[index])}>{heading}</div>
            ))}
        </div>
    </StyledSidebar>);
}

export default Sidebar;