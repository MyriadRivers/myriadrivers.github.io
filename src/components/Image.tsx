import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledImage = styled.div<{ $mainImage: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* max-height: 57vh; */
    padding: 20px 0px;
    margin: 0px 0px 0px calc(${props => props.$mainImage ? "0px" : "-100%"});
    @media ${breakpoints.laptop} {
        margin: 0px;
    }

    img {
        width: 100%;
    }

    overflow: hidden;
    align-items: end;
    text-align: center;
    font-size: 12pt;
    
    font-style: italic;
`

function Image({ src, caption, mainImage }: { src: string, caption?: string, mainImage?: boolean }) {
    return (<StyledImage $mainImage={mainImage ?? false}>
        <img src={src} alt={caption} />
        {caption}
    </StyledImage>);
}

export default Image;