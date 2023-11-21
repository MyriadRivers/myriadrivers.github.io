import styled from "styled-components";
import { useState } from "react"

const StyledTag = styled.div<{ $active: boolean }>`
    font-size: 12pt;
    background: ${props => props.$active ? "purple" : "lavender"};
    
    text-transform: uppercase;

    margin: 0px;
    padding: 5px;
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