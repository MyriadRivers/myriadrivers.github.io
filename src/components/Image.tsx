import styled from "styled-components";

const StyledImage = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    img {
        margin: 20px;
    }

    text-align: center;
    font-size: 13pt;
    font-style: italic;
`

function Image({ src, caption }: { src: string, caption: string }) {
    return (<StyledImage>
        <img src={src} />
        {caption}
    </StyledImage>);
}

export default Image;