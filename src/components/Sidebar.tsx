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

const scrollTo = (element: HTMLElement | null) => {
    if (element) {
        element.scrollIntoView();
    }
}

function Sidebar({ headings, refs }: { headings: Array<string>, refs: Array<HTMLDivElement | null> }) {
    return (<StyledSidebar>
        <div className="sidebarContent">
            {headings.map((heading, index) => (
                <div onClick={() => scrollTo(refs[index])}>{heading}</div>
            ))}
        </div>
    </StyledSidebar>);
}

export default Sidebar;