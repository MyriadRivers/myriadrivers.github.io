import styled from "styled-components";

const StyledButton = styled.button`
    background: ${props => props.theme.main};
`

function Button({ text }: { text: string }) {
    return (<StyledButton>
        {text}
    </StyledButton>);
}

export default Button;