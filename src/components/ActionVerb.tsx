import { useRef, useState } from "react";
import styled from "styled-components";

const StyledActionVerb = styled.span`
    font-weight: bold;

    &:hover {
        cursor: pointer;
        text-decoration: underline dashed;
        text-underline-offset: 1rem;
    }
`

function ActionVerb({ }) {
    const words = useRef<Array<string>>(["learning", "doing", "creating", "understanding", "playing", "empathizing", "exploring", "tinkering", "dreaming"]);
    const [wordIndex, setWordIndex] = useState<number>(0);
    return (<StyledActionVerb onClick={() => {
        let newIndex = Math.floor(Math.random() * words.current.length);
        while (newIndex == wordIndex) {
            newIndex = Math.floor(Math.random() * words.current.length);
        }
        setWordIndex(newIndex);
    }}>
        {words.current[wordIndex]}.
    </StyledActionVerb>)
}

export default ActionVerb;