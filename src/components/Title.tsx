import styled from "styled-components";
import Canvas from "./Canvas";
import riverImage from "../assets/images/river.png"
import breakpoints from "../styles/breakpoints";

const StyledTitle = styled.div`
    font-family: ${props => props.theme.headerFont};
    font-size: 3vw;
    letter-spacing: 0.25em;

    @media ${breakpoints.mobile} {
        display: none;
    }

    justify-content: center;

    .river {
        height: 1.05em;
        margin-right: 0.25em;
    }
    
    text-transform: uppercase;
    
    display: flex;
`

function Title() {
    return (
    <StyledTitle>
        Jason
        <img src={riverImage} className={"river"} alt={"川"}/>
        Gao
    </StyledTitle>);
}

export default Title;