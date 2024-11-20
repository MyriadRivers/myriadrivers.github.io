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
`

function Sidebar({ headings, scrollRef, contentScrollTop, headingRefs }:
    { headings: Array<string>, scrollRef: HTMLDivElement | null, contentScrollTop: number, headingRefs: Array<HTMLDivElement | null> }) {
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        if (!headingRefs || !contentScrollTop || !headingRefs[0]) return;

        for (let i = 0; i < headingRefs.length; i++) {
            let headingRef = headingRefs[i];
            let offsetTop = headingRef ? headingRef.offsetTop : 0;
            if (contentScrollTop >= offsetTop - headingRefs[0].offsetTop) { setActive(i) };
        }
    }, [contentScrollTop])

    useEffect(() => {
        if (contentScrollTop) console.log(contentScrollTop);
    }, [contentScrollTop])

    useEffect(() => {
        console.log("Active index " + active);
    }, [active])

    const scrollTo = (element: HTMLElement | null) => {
        if (element && scrollRef && headingRefs[0]) {
            scrollRef.scrollTop = element.offsetTop - headingRefs[0].offsetTop;
        }
    }

    return (<StyledSidebar>
        <div className="sidebarContent">
            {headings.map((heading, index) => (
                <SideBarElement text={heading} active={
                    active === index
                }
                    key={index}
                    onClick={() => {
                        scrollTo(headingRefs[index]);
                        setActive(index);
                    }} />
            ))}
        </div>
    </StyledSidebar>);
}

export default Sidebar;