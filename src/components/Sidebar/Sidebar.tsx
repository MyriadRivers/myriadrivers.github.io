import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { useEffect, useState } from "react";
import SideBarElement from "./SideBarElement";

const StyledSidebar = styled.div`
    display: flex;

    @media ${breakpoints.mobile} {
        display: none;
    }

    .sidebarContent {
        /* background: pink; */
        margin-right: 80px;

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

function Sidebar({ headings, activeHeading, scrollRef, headingRefs }:
    { headings: Array<string>, activeHeading: number, scrollRef: HTMLDivElement | null, headingRefs: Array<HTMLDivElement | null> }) {

    const scrollTo = (element: HTMLElement | null) => {
        if (element && scrollRef && headingRefs[0]) {
            scrollRef.scrollTop = element.offsetTop - headingRefs[0].offsetTop;
        }
    }

    return (<StyledSidebar>
        <div className="sidebarContent" onScroll={() => console.log("oof")}>
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