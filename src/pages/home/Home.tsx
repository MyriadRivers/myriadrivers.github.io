import styled from "styled-components";
import jason from "../../assets/images/jason.png"
import breakpoints from "../../styles/breakpoints";

const StyledHome = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    overflow: auto;
    
    @media ${breakpoints.mobile} {
        flex-direction: column;
        align-items: center;
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
        height: 100%;
        display: flex;

        @media ${breakpoints.mobile} {
            overflow: hidden;
        }
    }

    .jasonImage {
        height: 100%;
    }
`

function Home() {
    return (<StyledHome>
        <div className={"homeText"}>
            Hey! I'm Jason, a full-stack developer.
            <br />
            <br />
            I'm interested in Human-Computer Interaction, computational creativity, computer music, and insects.
            <br />
            <br />
            Nice to meet you!
        </div>
        <div className={"jasonImageContainer"}>
            <img className={"jasonImage"} src={jason} alt={"Self portrait of me!"}/>
        </div>
    </StyledHome>);
}

export default Home;