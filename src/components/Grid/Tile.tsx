import { Link, To } from "react-router-dom";
import styled from "styled-components";

const StyledTile = styled.div`
    background: seagreen;
    aspect-ratio: 1/1;
    max-width: 100%;
    border: solid;
`

function Tile({ title, url, image, tags }: { title: string, url: To, image: string, tags: Array<string> }) {
    return (<Link to={url} >
        <StyledTile>
            {title}
        </StyledTile>
    </Link>);
}

export default Tile;