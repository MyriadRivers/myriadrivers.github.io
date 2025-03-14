import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef, useState } from "react";
import ActionVerb from "../../components/ActionVerb";

const StyledHome = styled.div`
    /* background-color: black; */
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
        /* gap: 20px; */

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

    .actionVerb {
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    }
`

function Home() {
    return (<StyledHome>
        <div className={"homeLeftContainer"}>
        </div>
        <div className={"homeText"}>
            <div className={"homeHeader"}>
                Never stop <ActionVerb />
            </div>
            <div>
                {/* <p>
                    ...to the very last detail.
                </p> */}
                <p>
                    I'm Jason.
                </p>
                <p>
                    I am a designer, UX researcher, and creative engineer committed to empathizing radically and building playfully.
                </p>
                <p>
                    Excited to meet you.
                </p>
            </div>
            {/* <LinkList links={links} /> */}
        </div>
    </StyledHome>);
}

export default Home;