import styled from "styled-components";
import Canvas from "./Canvas";
import riverImage from "../assets/images/river.png"

const StyledTitle = styled.div`
    font-family: ${props => props.theme.headerFont};
    font-size: 40pt;
    letter-spacing: 0.25em;

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