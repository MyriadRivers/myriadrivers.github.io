import { Box, Grid2, Typography } from "@mui/material";

const TimelineSection = ({name, weeks, events }: {name: string, weeks: number, events?: Array<string>}) => {
    return (
        <Grid2 flexGrow={weeks}>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    <Box>
                        <Typography variant="h5">{name}</Typography>
                    </Box>
                    <Box fontSize={"12pt"}>
                        <i>{weeks} {weeks > 1 ? "weeks" : "week"}</i>
                    </Box>
                </Box>
                <Box bgcolor={"black"} height={20}/>
                <Box display={"flex"} flexDirection={"column"} fontSize={"12pt"}>
                    {events && events.map((event, i) => (
                        <Box key={i} flexWrap={"wrap"}>
                            {event}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Grid2>
    )
}

export default TimelineSection;