import { Link, To } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag";

const StyledTile = styled.div`
    font-size: 16pt;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;

    .image {
        aspect-ratio: 1/1;
    }

    .tileTags {
        padding: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`

function Tile({ title, url, image, tags }: { title: string, url: To, image: string, tags: Array<string> }) {
    return (<Link to={url} >
        <StyledTile>
            <img src={image} ></img>
            {title}
            <div className={"tileTags"}>
                {tags.map(tag => (
                    <Tag name={tag} />
                ))}
            </div>
        </StyledTile>
    </Link>);
}

export default Tile;