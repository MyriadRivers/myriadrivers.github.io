import styled from "styled-components";
import jason from "../../assets/images/jason.png"
import jason2 from "../../assets/images/jason2.png"
import jason3 from "../../assets/images/jason3.png"
import jason4 from "../../assets/images/jason4.png"
import jason5 from "../../assets/images/jason5.png"
import jason6 from "../../assets/images/jason6.png"
import jason7 from "../../assets/images/jason7.png"
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef, useState } from "react";
import LinkList from "../../components/LinkList";

import resumePath from "../../assets/files/resume.pdf";
import Link from "../../components/Link";

const jasonImages = [jason, jason2, jason3, jason4, jason5, jason6, jason7];

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
    }

    .homeHeader {
        font-size: calc(20pt + 1vw);
    }

    .jasonImageContainer {
        width: 140%;
        @media ${breakpoints.mobile} {
            flex: 1 1 auto;
        }
        
        height: 100%;
        display: flex;
    }

    .jasonImage {
        cursor: help;
        margin: auto;

        height: 100%;
        width: auto;
        
    }
`

const links = [
    { text: "résumé", url: resumePath },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/jasoncgao/" },
    { text: "GitHub", url: "https://github.com/MyriadRivers" },
    { text: "email", url: "mailto:jasongao678+careers@gmail.com"}
]

function Home() {
    const [portraitID, setPortraitID] = useState<number>(Math.floor(Math.random() * jasonImages.length));

    const swapPortrait = () => {
        let newID = Math.floor(Math.random() * jasonImages.length);
        while (newID === portraitID) {
            newID = Math.floor(Math.random() * jasonImages.length);
        }
        setPortraitID(newID);
    }

    return (<StyledHome>
        <div className={"jasonImageContainer"}>
            {/* <img className={"jasonImage"} onClick={swapPortrait} src={jasonImages[portraitID]} alt={"Self portrait of me!"}/> */}
        </div>
        <div className={"homeText"}>
            <div className={"homeHeader"}>
                Simple, usable, delightful.
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