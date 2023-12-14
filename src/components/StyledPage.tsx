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
        list-style: none;

        li {
            counter-increment: list-counter;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        li:before{
            content: "[" counter(list-counter) "] ";
            align-self: flex-start;
            margin-right: 20px;
        }
    }

    overflow: hidden;
`

export default StyledPage;