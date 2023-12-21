import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.headerFont};
    font-size: calc(10pt + 1vw);
    text-transform: uppercase;
    letter-spacing: 6pt;

    color: ${props => props.$active ? props.theme.main : props.theme.alt};
    background: ${props => props.$active ? props.theme.alt : props.theme.main};
    box-sizing: border-box;
    
    // Eliminate a dark sliver on the edge of the nav bar in some zoom settings
    box-shadow: 1px 0px 0px 0px ${props => props.$active ? props.theme.alt : props.theme.main};

    @media ${breakpoints.mobile} {
        background: ${props => props.theme.main};
        color: ${props => props.theme.type === "monochrome" ?
        props.theme.alt :
        props.$active ?
            props.theme.accent
            : props.theme.alt};
        mix-blend-mode: multiply;
    }

    .text {
        padding: 5px 10px 5px 10px;
        margin-right: -5pt;

        &:hover {
            color: ${props => props.theme.type === "monochrome" ?
        "" :
        props.$active ? "" : props.theme.accent};
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