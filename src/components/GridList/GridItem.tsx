import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

const GridItem = ({ icon, header, text, borderStyle }: { icon: ReactNode, header?: string, text: string, borderStyle: { borderRight: string, borderBottom: string } }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", alignItems: "center", ...borderStyle }}>
            <Box display="flex" sx={{ bgcolor: "primary.main", color: "secondary.main", padding: "20px", borderRadius: "100%", aspectRatio: "1/1", justifyContent: "center", fontSize: "1.25em" }}>
                {icon}
            </Box>
            {header && <Typography variant="h4" textAlign={"center"}>{header}</Typography>}
            {text}
        </Box>
    )
}

export default GridItem;