import { ReactNode } from "react";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0px 0px 0px -100%;

    @media ${breakpoints.laptop} {
        margin: 0px;
    }
`

const MediaContainer = ({children}: {children: ReactNode}) => {
    return (
        <StyledMediaContainer>
            {children}
        </StyledMediaContainer>
    )
}

export default MediaContainer;