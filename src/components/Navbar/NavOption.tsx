import styled from "styled-components";
import Heading from "../Heading";
import Canvas from "../Canvas";

const StyledNavOption = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.headerFont};
    font-size: 25pt;
    text-transform: uppercase;
    letter-spacing: 6pt;

    /* border: solid; */
    color: black;
    box-sizing: border-box;

    /* padding: 5px; */

    .text {
        padding: 5px 10px 5px 10px;
        margin-right: -5pt;
    }
`

function NavOption({ text, active }: { text: string, active: boolean }) {
    return (<StyledNavOption $active={active}>
        { active ? 
        <Canvas>
            <div className="text">
                {text}
            </div>
        </Canvas> :
        <div className="text">
            {text}
        </div>}
        
    </StyledNavOption>);
}

export default NavOption;