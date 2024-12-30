import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { ReactNode } from "react";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.headerFont};
    font-size: calc(min(5pt + 2vw, 16pt));

    transform: translate3d(0,0,0);

    text-transform: uppercase;
    letter-spacing: 6pt;

    @media ${breakpoints.laptop} {
        font-size: 18pt;
        letter-spacing: 4pt;
    }

    color: ${props => props.$active ? props.theme.main : props.theme.alt};
    /* filter: invert(100%); */

    background: ${props => props.$active ? props.theme.alt : props.theme.main};

    box-sizing: border-box;

    &:hover {
        color: ${props => props.theme.main};
        background: ${props => props.theme.alt};
        @media ${breakpoints.mobile} {
            color: ${props => props.theme.alt};
            background: ${props => props.theme.main};
        }
        border-color: ${props => props.theme.main};
        /* color: ${props => props.theme.type === "monochrome" ?
        "" :
        props.$active ? "" : props.theme.accent}; */
        /* box-shadow: 1px 0px 0px 0px ${props => props.theme.alt}; */
    }
    
    box-sizing: border-box;
    
    // Eliminate a dark sliver on the edge of the nav bar in some zoom settings
    /* box-shadow: 1px 0px 0px 0px ${props => props.$active ? props.theme.alt : props.theme.main}; */

    @media ${breakpoints.mobile} {
        background: ${props => props.theme.main};
        color: ${props => props.theme.type === "monochrome" ?
        props.theme.alt :
        props.$active ?
            props.theme.accent
            : props.theme.alt};
        mix-blend-mode: multiply;
        box-shadow: 0px 0px 0px 0px ${props => props.$active ? props.theme.alt : props.theme.main};
    }

    .text {
        padding: 5px 10px 5px 10px;
        margin-right: -5pt;
    }
`

function NavOption({ active, onClick, children }: { active: boolean, onClick?: Function, children: ReactNode }) {
    return (<StyledNavOption $active={active}>
        {onClick ?
            <div className="text" onClick={() => onClick()}>
                {children}
            </div> :
            <div className="text">
                {children}
            </div>}

    </StyledNavOption>);
}

export default NavOption;