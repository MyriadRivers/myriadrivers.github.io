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
        outline: 2px solid;
        
        &:hover {
            outline-style: dashed;
        }
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
            letter-spacing: ${props => props.theme.type === "monochrome" ? "2px" : "normal"};
        }
    }

    a {
        color: inherit;
    }
`

function Tile({ title, url, image, tags }: { title: string, url: To, image: string, tags: Array<string> }) {
    return (
        <StyledTile>
            <Link to={url} className={"tileContents"}>
                <img src={image} className={"tileImage"} alt={title}></img>
                {title}
            </Link>
            <div className={"tileTags"}>
                {tags.map((tag, index) => (
                    <Tag name={tag} key={index} />
                ))}
            </div>
        </StyledTile>);
}

export default Tile;