import styled from "styled-components"

const MediaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
`

export default MediaGrid;