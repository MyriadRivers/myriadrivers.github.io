import styled from "styled-components";

const StyledButton = styled.button`
    background: none;
    color: ${props => props.theme.accent};

    font-family: ${props => props.theme.headerFont};
    letter-spacing: 1pt;

    font-size: 12pt;
    border-color: ${props => props.theme.accent};
    border-style: solid;
    border-width: 2px;

    text-transform: uppercase;

    margin: 0px;
    padding: 5px;

    &:hover {
        cursor: pointer;
    }
`

function Button({ text, onClick }: { text: string, onClick: Function }) {
    return (<StyledButton onClick={() => onClick()}>
        {text}
    </StyledButton>);
}

export default Button;