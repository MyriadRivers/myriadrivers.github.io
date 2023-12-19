import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledVideo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    video {
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

function Video({ src, caption }: { src: string, caption?: string }) {
    return (<StyledVideo>
        <video src={src} controls >
            <source src={src} />
        </video>
        {caption}
    </StyledVideo>);
}

export default Video;