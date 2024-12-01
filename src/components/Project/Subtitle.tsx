import styled from "styled-components";

const StyledSubtitle = styled.div`
    font-size: 12pt;

    .subtitleTitle {
        font-weight: bold;
    }
`;

const Subtitle = ({title, text}: {title: string, text: string}) => {
    return (
        <StyledSubtitle>
            <div className={"subtitleTitle"}>
                {title}
            </div>
            {text}
        </StyledSubtitle>
    )
};

export default Subtitle;