import styled from "styled-components";

const StyledTitle = styled.div`
    font-size: 3em;

    .chuan {
        font-size: 0.8em;
        color: #72b1d2;

        line-height: 1.7em;
    }
    
    text-transform: uppercase;
    
    display: flex;
    gap: 10px;
`

function Title() {
    return (<StyledTitle>
        Jason<div className={"chuan"}>川</div>Gao
    </StyledTitle>);
}

export default Title;