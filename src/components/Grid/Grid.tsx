import styled from "styled-components";
import Tile from "./Tile";
import { To } from "react-router-dom";
import { useState, useEffect } from "react"
import Tag from "./Tag";
import { ProjectTag } from "../../types";
import breakpoints from "../../styles/breakpoints";

const StyledGrid = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .tags {
        margin-top: 10px;
        position: sticky;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        @media ${breakpoints.mobile} {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        gap: 20px;
        overflow: auto;
        padding: 0px 20px; 

        @media ${breakpoints.mobile} {
            padding: 0px; 
        }
    }

    margin: auto;
    overflow: hidden;
    height: 100%;
    width: 100%;
`

function Grid({ tiles }: { tiles: Array<{ title: string, url: To, image: string, tags: Array<ProjectTag> }> }) {
    const [allTags, setAllTags] = useState<Array<ProjectTag>>([]);
    const [activeTags, setActiveTags] = useState<Array<ProjectTag>>([]);

    useEffect(() => {
        // Get array of all occurring tags
        let foundTags: Array<ProjectTag> = []

        tiles.forEach(tile => {
            tile.tags.forEach(tag => {
                if (!foundTags.includes(tag)) {
                    foundTags.push(tag);
                }
            });
        });

        setAllTags(foundTags);
    }, [tiles])

    const toggleTag = (tag: ProjectTag) => {
        if (activeTags.includes(tag)) {
            let newTags = activeTags.filter((el) => el !== tag);
            setActiveTags(newTags);
        } else {
            let newTags = [...activeTags, tag]
            setActiveTags(newTags);
        }
    }

    return (<StyledGrid>
        <div className={"tags"}>
            {allTags.map((tag, index) => (
                <Tag name={tag} toggleTags={() => toggleTag(tag)} key={index} />
            ))}
        </div>
        <div className="grid">
            {tiles.map((tile, index) => (
                // Display only tiles with matching tags, or all tiles if no tags are selected (default)
                // INTERSECTION
                (activeTags.length === 0 || activeTags.every(el => tile.tags.includes(el))) &&
                // UNION
                // (activeTags.length === 0 || activeTags.some(el => tile.tags.includes(el))) &&
                <Tile title={tile.title} url={tile.url} image={tile.image} tags={tile.tags} key={index}></Tile>
            ))}
        </div>
    </StyledGrid>);
}

export default Grid;