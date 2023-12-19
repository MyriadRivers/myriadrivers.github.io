import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        max-height: 50vh;
        max-width: 100%;
    }

    overflow: hidden;
    align-items: center;
    text-align: center;
    font-size: 13pt;
    @media ${breakpoints.mobile} {
        font-size: 10pt;
    }
    font-style: italic;
`

function Image({ src, caption }: { src: string, caption?: string }) {
    return (<StyledImage>
        <img src={src} alt={caption}/>
        {caption}
    </StyledImage>);
}

export default Image;