import styled from "styled-components";

const StyledHome = styled.div`
    height: 100%;
    font-size: 30pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .homeContainer {
        width: 100%;
    }
`

function Home() {
    return (<StyledHome>
        <div className={"homeContainer"}>
            Hi! I'm Jason, a fullstack developer.
            <br />
            <br />
            I'm interested in Human-Computer Interaction, computational creativity, and insects.
        </div>
    </StyledHome>);
}

export default Home;