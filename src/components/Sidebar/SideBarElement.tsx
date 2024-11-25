import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledSideBarElement = styled.div<{ $active: boolean }>`
    text-underline-offset: 0.5rem;
    text-decoration: ${props => props.$active === true ? "underline" : "none"};
    text-decoration-thickness: 3px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-style: dashed;
    }
`

const SideBarElement = ({ text, active, onClick }: { text: string, active: boolean, onClick: MouseEventHandler | undefined }) => {
    return (
        <StyledSideBarElement onClick={onClick} $active={active}>
            {text}
        </StyledSideBarElement>
    )
}

export default SideBarElement;