import styled from "styled-components";

const StyledImage = styled.div`
    display: flex;
    flex-direction: column;

    img {
        max-height: 50vh;
        max-width: 100%;
    }

    overflow: hidden;
    align-items: center;
    text-align: center;
    font-size: 13pt;
    font-style: italic;
`

function Image({ src, caption }: { src: string, caption?: string }) {
    return (<StyledImage>
        <img src={src} alt={caption}/>
        {caption}
    </StyledImage>);
}

export default Image;