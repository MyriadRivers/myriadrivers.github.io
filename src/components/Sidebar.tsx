import styled from "styled-components";
import { Ref } from "react"

const StyledSidebar = styled.div`
    font-size: 18pt;
    text-transform: uppercase;
    letter-spacing: 2pt;
    text-align: right;

    display: flex;
    flex-direction: column;
    gap: 20px;

    outline: solid;

    padding: 20px;
`

const scrollTo = (element: HTMLElement | null) => {
    if (element) {
        element.scrollIntoView();
    }
}

function Sidebar({ headings, refs }: { headings: Array<string>, refs: Array<HTMLDivElement | null> }) {
    return (<StyledSidebar>
        {headings.map((heading, index) => (
            <div onClick={() => scrollTo(refs[index])}>{heading}</div>
        ))}
    </StyledSidebar>);
}

export default Sidebar;