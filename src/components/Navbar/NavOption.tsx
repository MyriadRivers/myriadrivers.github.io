import styled from "styled-components";
import Heading from "../Heading";
import Canvas from "../Canvas";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-size: 20pt;
    text-transform: uppercase;
    letter-spacing: 6pt;

    outline: ${props => props.$active ? "solid" : ""};

    /* padding: 5px; */
`

function NavOption({ text, active }: { text: string, active: boolean }) {
    return (<StyledNavOption $active={active}>
        { active ? 
        <Canvas>
            {text}
        </Canvas> :
        text}
        
    </StyledNavOption>);
}

export default NavOption;