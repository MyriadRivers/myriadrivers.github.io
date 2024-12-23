import { ReactNode } from "react";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledTable = styled.table`
    // TODO: Undo all this. Use a grid. Better yet, import MUI and redo all your fucking styling so responsiveness doesn't suck completely
    width: 200%;
    margin: 20px 0px 20px -100%;

    table-layout: fixed;
    border-collapse: collapse;

    @media ${breakpoints.laptop} {
        width: 100%;
        margin: 0px;
        padding: 20px 0px;
    }

    caption {
        font-weight: bold;
        margin-bottom: 10px;
    }

    th, td {
        padding: 10px;
        border: 1px solid black;
        vertical-align: top;
    }
`

const Table = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <StyledTable>
            <caption>{title}</caption>
            {children}
        </StyledTable>
    )
}

export default Table;