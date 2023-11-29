import styled from "styled-components";
import Canvas from "./Canvas";

const StyledTitle = styled.div`
    outline: solid;
    
    font-size: 3.5em;
    letter-spacing: 0.25em;

    /* .chuan {
        font-size: 0.8em;
        color: #72b1d2;

        line-height: 1.7em;
    } */
    
    text-transform: uppercase;
    
    display: flex;
    gap: 10px;

    /* padding: 10px; */
`

function Title() {
    return (<StyledTitle>
        <Canvas>
            Jason Gao
        </Canvas>
    </StyledTitle>);
}

export default Title;