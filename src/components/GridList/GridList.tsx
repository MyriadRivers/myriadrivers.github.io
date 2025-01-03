import { Biotech, EmojiPeople, Person } from "@mui/icons-material";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import GridItem from "./GridItem";

const MIN_WIDTH = 300;

const GridList = ({ items }: { items: Array<{ icon: ReactNode, header?: string, text: string }> }) => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [cols, setCols] = useState<number>(0);

    useEffect(() => {
        if (!gridRef.current) return;
        const tagsResizeObserver = new ResizeObserver((size) => {
            let gridWidth = size[0].contentRect.width;
            setCols(Math.min(Math.floor(gridWidth / MIN_WIDTH), items.length));
        })
        tagsResizeObserver.observe(gridRef.current);
        setCols(Math.floor(gridRef.current.clientWidth / MIN_WIDTH));
    }, [])

    const getBorderStyle = (index: number, totalItems: number) => {
        const isLastInRow = (index + 1) % cols === 0;
        const isLastRow = (index) >= totalItems - (totalItems % cols || cols);

        return {
            borderRight: !isLastInRow ? "1px solid black" : "none",
            borderBottom: !isLastRow ? "1px solid black" : "none",
        };
    };

    return (
        <Box display={"grid"} ref={gridRef} sx={
            {
                width: { laptop: "200%", xs: "100%" },
                marginTop: "40px",
                marginBottom: "40px",
                marginLeft: { laptop: "-100%", xs: "0%" },
                alignItems: "stretch",
                gridTemplateColumns: `repeat(auto-fit, minmax(${MIN_WIDTH}px, 1fr))`,
            }
        }>
            {items.map((tile, index) => (
                <GridItem icon={tile.icon} header={tile.header} text={tile.text} borderStyle={getBorderStyle(index, items.length)} key={index} />
            ))}
        </Box>
    )
}

export default GridList; 