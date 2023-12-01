import styled from "styled-components";
import Canvas from "./Canvas";

const StyledTitle = styled.div`
    /* outline: solid; */
    /* border: solid; */
    color: black;
    /* background: orange; */
    
    font-family: ${props => props.theme.headerFont};
    font-size: 3em;
    letter-spacing: 0.25em;

    justify-content: center;

    .chuan {
        /* font-size: 0.8em; */
        color: #72b1d2;

        line-height: 1.375em;
    }
    
    text-transform: uppercase;
    
    display: flex;
    gap: 10px;
`

function Title() {
    return (<Canvas>
        <StyledTitle>
            Jason<div className="chuan">川</div>Gao
        </StyledTitle>
    </Canvas>);
}

export default Title;