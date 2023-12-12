import styled from "styled-components";
import jason from "../../assets/images/jason.png"
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef } from "react";

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
        font-size: calc(15pt + 1vw);

        margin: auto;
        overflow: none;

        @media ${breakpoints.mobile} {
            margin: 0;
        }
    }

    .jasonImageContainer {
        display: flex;
    }

    .jasonImage {
        margin: auto;
    }
`

function Home() {
    const homeRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const imgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeImg = () => {
            if (!imgRef.current || !imgContainerRef.current || !homeRef.current) return;

            if (homeRef.current.scrollHeight > homeRef.current.offsetHeight) {
                console.log("vertical overflow");
                imgContainerRef.current.style.height = "100%";
                imgContainerRef.current.style.overflow = "hidden";
            } else {
                console.log("vertical normal");
                imgContainerRef.current.style.height = "auto";
            }

            if (homeRef.current.scrollWidth > homeRef.current.offsetWidth) {
                console.log("horizontal overflow");
                imgContainerRef.current.style.width = "100%";
                imgContainerRef.current.style.overflow = "hidden";
            } else {
                console.log("horizontal normal");
                imgContainerRef.current.style.width = "auto";
            }

            if (imgRef.current.width > imgContainerRef.current.clientWidth) {
                imgRef.current.style.width = "100%";
                imgRef.current.style.height = "auto";
            } else  if (imgRef.current.height > imgContainerRef.current.clientHeight) {
                imgRef.current.style.width = "auto";
                imgRef.current.style.height = "100%";
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
            Hey! I'm Jason, a full-stack developer.
            <br />
            <br />
            I'm interested in Human-Computer Interaction, computational creativity, computer music, and insects.
            <br />
            <br />
            Nice to meet you!
        </div>
        <div className={"jasonImageContainer"} ref={imgContainerRef}>
            <img className={"jasonImage"} src={jason} alt={"Self portrait of me!"} ref={imgRef}/>
        </div>
    </StyledHome>);
}

export default Home;