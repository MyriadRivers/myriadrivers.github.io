import { ReactNode } from "react";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0px 0px 0px calc(-100% + -40px);
    padding: 40px 0px;

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