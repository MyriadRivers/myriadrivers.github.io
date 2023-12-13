import styled from "styled-components";

const StyledVideo = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    video {
        margin: 20px 0px;
    }

    text-align: center;
    font-size: 13pt;
    font-style: italic;
`

function Video({ src, caption }: { src: string, caption?: string }) {
    return (<StyledVideo>
        <video src={src} controls >
            <source src={src} />
        </video>
        {caption}
    </StyledVideo>);
}

export default Video;