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

const StyledAbout = styled.div`
    height: 100%;
    /* width: 100%; */

    display: flex;
    flex-direction: row;

    overflow: auto;

    gap: 40px;
    @media ${breakpoints.mobile} {
        gap: 0px;
    }
    
    @media ${breakpoints.mobile} {
        flex-direction: column;
    }

    .aboutTextContainer {
        width: 100%;
        overflow: auto;
        @media ${breakpoints.mobile} {
            overflow: visible;
        }
        display: flex;
    }

    .aboutText {
        /* width: 100%; */

        display: flex;
        flex-direction: column;
        gap: 20px;

        /* padding-right: 60px; */
        margin: auto;
        padding: 20px 60px 20px 40px;
        @media ${breakpoints.mobile} {
            padding: 0px; 
        }
    }

    .aboutHeader {
        font-weight: bold;
        font-size: 1.25em;
    }

    .jasonImageContainer {
        @media ${breakpoints.mobile} {
            width: 50%;
            margin: auto;        
        }
        width: 140%;
        display: flex;
        /* overflow: hidden; */
    }

    .jasonImage {
        cursor: help;
        margin: auto;

        max-width: 100%;
        height: auto;
        width: auto;
        
    }

    .bottomSpace {
        display: none;

        @media ${breakpoints.mobile} {
            display: inline-block;      
        }
        min-height: 150px;
    }
`

const links = [
    { text: "résumé", url: resumePath },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/jasoncgao/" },
    { text: "GitHub", url: "https://github.com/MyriadRivers" },
    { text: "email", url: "mailto:jasongao678+careers@gmail.com" }
]

function About() {
    const [portraitID, setPortraitID] = useState<number>(Math.floor(Math.random() * jasonImages.length));

    const swapPortrait = () => {
        let newID = Math.floor(Math.random() * jasonImages.length);
        while (newID === portraitID) {
            newID = Math.floor(Math.random() * jasonImages.length);
        }
        setPortraitID(newID);
    }

    return (<StyledAbout>
        <div className={"jasonImageContainer"}>
            <img className={"jasonImage"} onClick={swapPortrait} src={jasonImages[portraitID]} alt={"Self portrait of me!"} />
        </div>
        <div className={"aboutTextContainer"}>
            <div className={"aboutText"}>
                <div className={"aboutHeader"}>
                    Hey, I'm Jason!
                </div>
                <p>
                    I'm a current master's student in <Link url={"https://mshci.gatech.edu"}>Human-Computer Interaction at Georgia Tech</Link>,
                    where I studied Computer Science and Music Technology in my undergrad.
                </p>
                <p>
                    My desire is to unify creativity, technology, and human connection.
                    Good design doesn't stop at the sketching or wireframing phase; I bring a usability and empathy
                    centered mindset from the initial user interviews to the technical implementation in code.
                </p>
                <p>
                    In my free time, you might catch me making music, coding a personal project, or looking for bugs outside.
                </p>
                <LinkList links={links} />
                <div className={"bottomSpace"} />
            </div>
        </div>
    </StyledAbout>);
}

export default About;