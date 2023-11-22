import styled from "styled-components";

const StyledHome = styled.div`
    font-size: 30pt;

    width: 60%;
    margin: auto;
    padding-top: 70px;
`

function Home() {
    return (<StyledHome>
        Hello! My name is Jason Gao.
        <br />
        I'm a developer, designer, and musician.
        <br />
        <br />
        Welcome to my site!
    </StyledHome>);
}

export default Home;