import { createTheme } from "@mui/material";

const river = {
    headerFont: "Free Sans",
    bodyFont: "Average",
    main: "black",
    alt: "white",
    accent: "#72b1d2"
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        md: false,
        lg: false,
        xl: false,
        mobile: true,
        laptop: true
    }
}

const mono = {
    type: "monochrome",
    headerFont: "Funnel Sans",
    bodyFont: "Afacad Flux",
    main: "black",
    alt: "white",
    accent: "black"
}

const monoMUI = createTheme({
    palette: {
        primary: {
            main: "#000000",
            light: "#000000",
            dark: "#000000",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#ffffff",
            contrastText: "#000000",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            mobile: 764,
            laptop: 1000,
            // desktop: 1536
        }
    },
    typography: {
        fontFamily: "Afacad Flux",
        h5: {
            fontSize: "16pt",
            fontWeight: "bold"
        },
        h4: {
            fontSize: "1.25em",
            fontWeight: "bold"
        },
        h3: {
            fontSize: "1.5em",
            fontWeight: "bold"
        }
    }
})


export { river, mono, monoMUI };