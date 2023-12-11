import styled from "styled-components";
import Heading from "../Heading";
import Canvas from "../Canvas";
import breakpoints from "../../styles/breakpoints";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.headerFont};
    font-size: calc(10pt + 1vw);
    text-transform: uppercase;
    letter-spacing: 6pt;

    color: ${props => props.$active ? props.theme.main : props.theme.alt};
    background: ${props => props.$active ? props.theme.alt : props.theme.main};
    box-sizing: border-box;

    @media ${breakpoints.mobile} {
        background: ${props => props.theme.main};
        color: ${props => props.$active ? props.theme.accent : props.theme.alt};
    }

    .text {
        padding: 5px 10px 5px 10px;
        margin-right: -5pt;

        &:hover {
            color: ${props => props.$active ? "" : props.theme.accent};
        }
    }
`

function NavOption({ text, active, onClick }: { text: string, active: boolean, onClick?: Function }) {
    return (<StyledNavOption $active={active}>
        {onClick ?
        <div className="text" onClick={() => onClick()}>
            {text}
        </div> :
        <div className="text">
            {text}
        </div>}
        
    </StyledNavOption>);
}

export default NavOption;