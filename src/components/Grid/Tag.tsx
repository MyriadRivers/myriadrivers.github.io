import styled from "styled-components";
import { useState } from "react"

const StyledTag = styled.div<{ $active: boolean }>`
    background: ${props => props.$active ? "black" : "none"};
    color: ${props => props.$active ? "white" : "black"};

    font-size: 12pt;
    outline: ${props => props.$active ? "solid" : "solid"};
    outline-width: 2px;
    
    text-transform: uppercase;

    margin: 0px;
    padding: 5px;

    &:hover {
        cursor: pointer;
    }
`

function Tag({ name, toggleTags }: { name: string, toggleTags?: () => void }) {
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