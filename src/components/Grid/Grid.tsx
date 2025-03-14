import styled from "styled-components";
import Tile from "./Tile";
import { To } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import Tag from "./Tag";
import { ProjectTag } from "../../types";
import breakpoints from "../../styles/breakpoints";

const StyledGrid = styled.div<{ $tagsHeight: number }>`
    position: relative;
    display: flex;
    flex-direction: column;

    .tagsContainer {
        display: flex;
        flex-direction: row-reverse;
    }

    .tags {
        /* background: pink; */
        position: fixed;
        width: calc(100% - 2 * 60px);
        @media ${breakpoints.laptop} {
            width: calc(100% - 2 * 40px);
        }
        @media ${breakpoints.mobile} {
            width: calc(100% - 2 * 20px);
        }
        
        /* @media ${breakpoints.mobile} {
            padding-top: 10px;
        } */

        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap: 20px;

        z-index: 10;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        padding-top: ${props => `calc(${props.$tagsHeight}px + 20px)`};
        
        @media ${breakpoints.mobile} {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        /* gap: 40px; */
        /* overflow: auto; */
        /* padding: 0px 20px;  */

        @media ${breakpoints.mobile} {
            padding: ${props => `calc(${props.$tagsHeight}px + 20px)`} 0px 0px 0px; 
        }
    }

    
    .bottomSpace {
        min-height: 150px;
    }

    margin: auto;
    /* overflow: hidden; */
    /* height: 100%; */
    width: 100%;
`

function Grid({ tiles }: { tiles: Array<{ title: string, url: To, image: string, tags: Array<ProjectTag> }> }) {
    const [allTags, setAllTags] = useState<Array<ProjectTag>>([]);
    const [activeTags, setActiveTags] = useState<Array<ProjectTag>>([]);

    const tagsContainerRef = useRef<HTMLDivElement | null>(null);
    const [tagsHeight, setTagsHeight] = useState<number>(0);

    useEffect(() => {
        if (!tagsContainerRef.current) return;
        const tagsResizeObserver = new ResizeObserver((size) => {
            let rect = size[0].contentRect;
            setTagsHeight(rect.height);
        })
        tagsResizeObserver.observe(tagsContainerRef.current);
        setTagsHeight(tagsContainerRef.current.clientHeight);
    }, [])

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

    return (<StyledGrid $tagsHeight={tagsHeight}>
        <div className={"tagsContainer"}>
            <div className={"tags"} ref={tagsContainerRef}>
                {allTags.map((tag, index) => (
                    <Tag name={tag} toggleTags={() => toggleTag(tag)} key={index} />
                ))}
            </div>
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
        <div className={"bottomSpace"}>&nbsp;</div>
    </StyledGrid>);
}

export default Grid;