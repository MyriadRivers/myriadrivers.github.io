import styled from "styled-components";
import Heading from "../Heading";
import Canvas from "../Canvas";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.headerFont};
    font-size: 20pt;
    text-transform: uppercase;
    letter-spacing: 6pt;

    color: ${props => props.$active ? props.theme.main : props.theme.alt};
    background: ${props => props.$active ? props.theme.alt : props.theme.main};
    box-sizing: border-box;

    .text {
        padding: 5px 10px 5px 10px;
        margin-right: -5pt;

        &:hover {
            color: ${props => props.$active ? "" : props.theme.accent};
        }
    }
`

function NavOption({ text, active }: { text: string, active: boolean }) {
    return (<StyledNavOption $active={active}>
        <div className="text">
            {text}
        </div>
    </StyledNavOption>);
}

export default NavOption;