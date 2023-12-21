import styled from "styled-components";
import jason from "../../assets/images/jason.png"
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef } from "react";
import LinkList from "../../components/LinkList";

import resumePath from "../../assets/files/resume.pdf";

const StyledHome = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    overflow: auto;
    
    @media ${breakpoints.mobile} {
        flex-direction: column;
    }

    .homeText {
        display: flex;
        flex-direction: column;
        gap: 1em;

        font-size: calc(10pt + 1vw);

        @media ${breakpoints.mobile} {
            flex: 0 0 auto;
        }

        margin: auto;
        overflow: none;

        @media ${breakpoints.mobile} {
            margin: 0;
        }
    }

    .jasonImageContainer {
        @media ${breakpoints.mobile} {
            flex: 1 1 auto;
        }
        
        min-width: 40%;
        display: flex;
        overflow: hidden;
    }

    .jasonImage {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
    }
`

const links = [
    { text: "résumé", url: resumePath },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/jasoncgao/" },
    { text: "GitHub", url: "https://github.com/MyriadRivers" }
]

function Home() {
    const homeRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const imgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeImg = () => {
            if (!imgRef.current || !imgContainerRef.current || !homeRef.current) return;

            if (imgRef.current.height > imgContainerRef.current.clientHeight) {
                imgRef.current.height = imgContainerRef.current.clientHeight;
            }

        }
        window.addEventListener("resize", resizeImg);
        window.dispatchEvent(new Event("resize"));

        return () => {
            window.removeEventListener("resize", resizeImg);
        }
    }, [])

    return (<StyledHome ref={homeRef}>
        <div className={"homeText"}>
            <p>
                Hey! I'm Jason, a full-stack developer.
            </p>
            <p>
                I'm interested in Human-Computer Interaction, computational creativity, computer music, and terrestrial arthropods.
            </p>
            <p>
                Nice to meet you!
            </p>
            <LinkList links={links} />
        </div>
        <div className={"jasonImageContainer"} ref={imgContainerRef}>
            <img className={"jasonImage"} src={jason} alt={"Self portrait of me!"} ref={imgRef} />
        </div>
    </StyledHome>);
}

export default Home;