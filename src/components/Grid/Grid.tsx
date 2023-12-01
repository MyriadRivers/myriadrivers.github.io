import styled from "styled-components";
import Tile from "./Tile";
import { To } from "react-router-dom";
import { useState, useEffect } from "react"
import Tag from "./Tag";

const StyledGrid = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .tags {
        display: flex;
        gap: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 15px;
        height: 100%;
        overflow: auto;
    }

    margin: auto;
    height: 100%;
    width: 100%;
`

function Grid({ tiles }: { tiles: Array<{ title: string, url: To, image: string, tags: Array<string> }> }) {
    const [allTags, setAllTags] = useState<Array<string>>([]);
    const [activeTags, setActiveTags] = useState<Array<string>>([]);

    useEffect(() => {
        // Get array of all occurring tags
        let foundTags: Array<string> = []

        tiles.forEach(tile => {
            tile.tags.forEach(tag => {
                if (!foundTags.includes(tag)) {
                    foundTags.push(tag);
                }
            });
        });

        setAllTags(foundTags);
    }, [tiles])

    useEffect(() => {
        console.log(activeTags);
    }, [activeTags])

    const toggleTag = (tag: string) => {
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
                <Tag name={tag} toggleTags={() => toggleTag(tag)} />
            ))}
        </div>
        <div className="grid">
            {tiles.map((tile, index) => (
                // Display only tiles with matching tags, or all tiles if no tags are selected (default)
                (activeTags.length === 0 || activeTags.every(el => tile.tags.includes(el))) &&
                <Tile title={tile.title} url={tile.url} image={tile.image} tags={tile.tags}></Tile>
            ))}
        </div>
    </StyledGrid>);
}

export default Grid;