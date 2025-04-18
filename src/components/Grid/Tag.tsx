import styled from "styled-components";
import { useState } from "react"
import { ProjectTag } from "../../types";

const StyledTag = styled.div<{ $active: boolean }>`
    background: ${props => props.$active ? props.theme.main : props.theme.alt};
    color: ${props => props.$active ? props.theme.alt : props.theme.main};
    
    font-family: ${props => props.theme.headerFont};
    letter-spacing: 1pt;

    font-size: 12pt;
    border-color: ${props => props.theme.main};
    border-style: solid;
    border-width: 2px;

    text-transform: uppercase;

    /* filter: grayscale(100%); */

    margin: 0px;
    padding: 5px;

    box-sizing: border-box;

    &:hover {
        cursor: pointer;
        border-style: dashed;
    }
`

function Tag({ name, toggleTags }: { name: ProjectTag, toggleTags?: () => void }) {
    const [active, setActive] = useState(false);

    const toggleTag = () => {
        setActive(!active);
        if (toggleTags) toggleTags();
    }

    return (<StyledTag onClick={toggleTag} $active={active}>
        {name}
    </StyledTag>);
}

export default Tag;