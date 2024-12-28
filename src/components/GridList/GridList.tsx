import { Biotech, EmojiPeople, Person } from "@mui/icons-material";
import { Box, Grid2, Paper, Typography } from "@mui/material";
const GridList = () => {
    return (
        <Grid2 container direction={"row"} sx={{ width: { laptop: "200%", xs: "100%" }, marginTop: "20px", marginBottom: "20px", marginLeft: { laptop: "-100%", xs: "0%" }, alignItems: "stretch" }}>
            <Grid2 size={4} sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", alignItems: "center", borderRight: "solid black 1px" }}>
                <Box display="flex" sx={{ bgcolor: "primary.main", color: "secondary.main", padding: "20px", borderRadius: "100%" }}>
                    <Biotech fontSize="large" />
                </Box>
                <Typography variant="h4">U1: Researcher</Typography>
                Environmental scientist at Emory University specializing in air and soil pollution.
                Worked with the Atlanta Westside community to investigate lead contamination in the soil, leading to the area being classified as an EPA Superfund Site.
            </Grid2>
            <Grid2 size={4} sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", alignItems: "center", borderRight: "solid black 1px" }}>
                <Box display="flex" sx={{ bgcolor: "primary.main", color: "secondary.main", padding: "20px", borderRadius: "100%" }}>
                    <EmojiPeople fontSize="large" />
                </Box>
                <Typography variant="h4">U2: Community Leader</Typography>
                Lead the classification of the Buckhead Superfund Site, another local area contaminated with lead that U1's
                team had been investigating. Worked with federal officials to oversee remediation and cleanup.
            </Grid2>
            <Grid2 size={4} sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", alignItems: "center" }}>
                <Box display="flex" sx={{ bgcolor: "primary.main", color: "secondary.main", padding: "20px", borderRadius: "100%" }}>
                    <EmojiPeople fontSize="large" />
                </Box>
                <Typography variant="h4">U3: Community Leader</Typography>
                Leader of the Stop Sterigenics Georgia Facebook group. Coordinates with sympathetic government representatives and media to raise awareness and advocate change.
            </Grid2>
        </Grid2>
    )
}

export default GridList; 