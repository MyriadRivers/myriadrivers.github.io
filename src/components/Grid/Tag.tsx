import styled from "styled-components";
import { useState } from "react"

const StyledTag = styled.div<{ $active: boolean }>`
    background: ${props => props.$active ? "purple" : "lavender"};
`

function Tag({ name, toggleTags }: { name: string, toggleTags: () => void }) {
    const [active, setActive] = useState(false);

    const toggleTag = () => {
        setActive(!active);
        toggleTags();
    }

    return (<StyledTag onClick={toggleTag} $active={active}>
        {name}
    </StyledTag>);
}

export default Tag;