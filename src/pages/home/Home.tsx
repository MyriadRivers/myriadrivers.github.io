import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef, useState } from "react";

const StyledHome = styled.div`
    height: 100%;
    /* width: 100%; */

    display: flex;
    flex-direction: row;

    overflow: auto;

    gap: 40px;
    
    @media ${breakpoints.mobile} {
        flex-direction: column;
    }

    .homeText {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 20px;

        overflow: auto;
        /* padding-right: 60px; */
        margin: auto;
        padding: 20px 60px 20px 40px;
        @media ${breakpoints.mobile} {
            padding: 0px;
        }
    }

    .homeHeader {
        font-size: calc(20pt + 1vw);
    }

    .homeLeftContainer {
        width: 140%;
        
        height: 100%;
        display: flex;

        @media ${breakpoints.mobile} {
            flex-direction: column;
            display: none;
        }
    }
`

function Home() {
    return (<StyledHome>
        <div className={"homeLeftContainer"}>
        </div>
        <div className={"homeText"}>
            <div className={"homeHeader"}>
                Simple, usable, playful.
            </div>
            <p>
                I'm Jason, a UX researcher and creative engineer passionate about making people's lives more enjoyable.
            </p>
            <p>
                Excited to meet you.
            </p>
            {/* <LinkList links={links} /> */}
        </div>
    </StyledHome>);
}

export default Home;