import styled from "styled-components";
import jason from "../../assets/images/jason.png"

const StyledHome = styled.div`
    height: 100%;
    font-size: 30pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .homeContainer {
        width: 100%;
        display: flex;
        align-items: center;
    }
`

function Home() {
    return (<StyledHome>
        <div className={"homeContainer"}>
            <img src={jason} alt={"Self portrait of me!"}/>
            <div>
                Hey! I'm Jason, a full-stack developer.
                <br />
                <br />
                I'm interested in Human-Computer Interaction, computational creativity, and insects.
                <br />
                <br />
                Nice to meet you!
            </div>
        </div>
    </StyledHome>);
}

export default Home;