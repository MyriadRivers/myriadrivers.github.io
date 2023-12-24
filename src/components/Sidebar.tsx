import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledSidebar = styled.div`
    display: flex;

    @media ${breakpoints.mobile} {
        display: none;
    }

    .sidebarContent {
        font-family: ${props => props.theme.headerFont};
        font-size: calc(6pt + 1vw);
        text-transform: uppercase;
        letter-spacing: 2pt;
        text-align: right;

        display: flex;
        flex-direction: column;
        gap: calc(6pt + 0.5vw);

        padding: calc(4pt + 0.5vw);
    }

    .sidebarOption {
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.accent};
            font-style: ${props => props.theme.type === "monochrome" ? "italic" : ""};
        }
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
                <div onClick={() => scrollTo(headingRefs[index])} className={"sidebarOption"} key={index}>{heading}</div>
            ))}
        </div>
    </StyledSidebar>);
}

export default Sidebar;