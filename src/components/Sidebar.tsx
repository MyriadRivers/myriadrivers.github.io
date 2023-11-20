import styled from "styled-components";
import { Ref } from "react"

const StyledSidebar = styled.div`
    background: teal;
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