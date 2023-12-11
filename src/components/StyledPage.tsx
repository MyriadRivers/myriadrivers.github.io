import styled from "styled-components";

const StyledPage = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;

    .projectContents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        height: 100%;
        overflow: auto;

        padding-right: 20px;
        scroll-behavior: smooth;
    }

    .bottomSpace {
        min-height: 100px;
    }

    .references {
        counter-reset: list-counter;

        li {
            list-style: none;
        }

        li:before{
            content: "[" counter(list-counter) "] ";
            counter-increment: list-counter;
        }
    }

    overflow: hidden;
`

export default StyledPage;