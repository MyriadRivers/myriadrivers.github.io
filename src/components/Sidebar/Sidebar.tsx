import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import SideBarElement from "./SideBarElement";

const StyledSidebar = styled.div`
    display: flex;
    width: 20%;

    @media ${breakpoints.mobile} {
        display: none;
    }

    .sidebarContent {

        font-family: ${props => props.theme.headerFont};
        font-size: calc(min(5pt + 2vw, 16pt));
        text-transform: uppercase;
        letter-spacing: 2pt;
        text-align: right;

        display: flex;
        flex-direction: column;
        gap: calc(6pt + 0.5vw);

        padding: calc(4pt + 0.5vw);
    }
`

function Sidebar({ headings, activeHeading, pageTop, scrollRef, headingRefs }:
    { headings: Array<string>, activeHeading: number, pageTop: number | null, scrollRef: HTMLDivElement | null, headingRefs: Array<HTMLDivElement | null> }) {

    const scrollTo = (element: HTMLElement | null) => {
        if (element && scrollRef && headingRefs[0] && pageTop) {
            scrollRef.scrollTop = element.offsetTop - pageTop;
        }
    }

    return (<StyledSidebar>
        <div className="sidebarContent">
            {headings.map((heading, index) => (
                <SideBarElement text={heading} active={
                    activeHeading === index
                }
                    key={index}
                    onClick={() => {
                        scrollTo(headingRefs[index]);
                    }} />
            ))}
        </div>
    </StyledSidebar>);
}

export default Sidebar;