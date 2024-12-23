import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledImage = styled.div<{ $mainImage: boolean, $gif: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* max-height: 57vh; */
    padding: ${props => props.$mainImage ? "0px" : "20px"} 0px;
    margin: 0px 0px 0px calc(${props => props.$mainImage ? "0px" : "-100%"});
    @media ${breakpoints.laptop} {
        margin: 0px;
        padding: 20px 0px;
        align-items: start;
        text-align: left;
    }

    img {
        width: 100%;
        /* height: ${props => props.$gif ? "70vh" : ""};
        margin: ${props => props.$gif ? "auto" : ""};
        width: ${props => props.$gif ? "" : "100%"};

        @media ${breakpoints.laptop} {
            width: 100%;
        } */
    }

    overflow: hidden;
    align-items: end;
    text-align: right;
    /* text-align: center; */
    font-size: 12pt;
    
    font-style: italic;
`

function Image({ src, caption, mainImage, gif }: { src: string, caption?: string, mainImage?: boolean, gif?: boolean }) {
    return (<StyledImage $mainImage={mainImage ?? false} $gif={gif ?? false}>
        <img src={src} alt={caption} />
        {caption}
    </StyledImage>);
}

export default Image;