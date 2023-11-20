import styled from "styled-components";
import Tile from "./Tile";
import { To } from "react-router-dom";

const StyledGrid = styled.div`
    background: cornflowerblue;

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 10px;
`

function Grid({ tiles }: { tiles: Array<{ title: string, url: To, image: string, tags: Array<string> }> }) {
    return (<StyledGrid>
        {tiles.map((tile, index) => (
            <Tile title={tile.title} url={tile.url} image={tile.image} tags={tile.tags}></Tile>
        ))}
    </StyledGrid>);
}

export default Grid;