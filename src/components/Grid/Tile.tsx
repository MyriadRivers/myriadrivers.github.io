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

    .tileImage {
        aspect-ratio: 1/1;
        width: 100%;
    }

    .tileTags {
        padding: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        pointer-events: none;
    }

    .tileContents {
        &:hover {
            color: ${props => props.theme.accent};
        }
    }
`

function Tile({ title, url, image, tags }: { title: string, url: To, image: string, tags: Array<string> }) {
    return (
        <StyledTile>
            <Link to={url} className={"tileContents"}>
                <img src={image} className={"tileImage"}></img>
                {title}
            </Link>
            <div className={"tileTags"}>
                {tags.map(tag => (
                    <Tag name={tag} />
                ))}
            </div>
        </StyledTile>);
}

export default Tile;