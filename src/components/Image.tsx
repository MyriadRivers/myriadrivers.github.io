import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledImage = styled.div<{ $mainImage: boolean, $gif: boolean }>`
    /* background: pink; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* max-height: 57vh; */
    padding: ${props => props.$mainImage ? "0px" : "40px"} 0px;
    margin: 0px 0px 0px calc(${props => props.$mainImage ? "0px" : "calc(-100% + -40px)"});

    @media ${breakpoints.laptop} {
        margin: 0px;
        /* align-items: start; */
        text-align: left;
    }

    img {
        max-width: 100%;
        height: auto;
        /* height: 100%; */
        /* height: ${props => props.$gif ? "70vh" : ""};
        margin: ${props => props.$gif ? "auto" : ""};
        width: ${props => props.$gif ? "" : "100%"};

        @media ${breakpoints.laptop} {
            width: 100%;
        } */
    }

    .imageCaptionContainer {
        /* width: 100%; */
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    }

    .imageContainer {
        margin: auto;
    }

    overflow: hidden;
    align-items: center;
    text-align: right;
    /* text-align: center; */
    font-size: 12pt;
    
    font-style: italic;
`

function Image({ src, caption, mainImage, gif }: { src: string, caption?: string, mainImage?: boolean, gif?: boolean }) {
    return (<StyledImage $mainImage={mainImage ?? false} $gif={gif ?? false}>
        <div className={"imageCaptionContainer"}>
            <div className={"imageContainer"}>
                <img src={src} alt={caption} />
            </div>
            {caption}
        </div>
    </StyledImage>);
}

export default Image;