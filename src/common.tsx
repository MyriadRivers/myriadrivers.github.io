import Projects from "./pages/projects/Projects"
import Links from "./pages/links/Links"
import SpotifyKaraoke from "./pages/projects/SpotifyKaraoke/SpotifyKaraoke"

const navRoutes = [
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "links",
        element: <Links />
    }
]

const projectRoutes = [
    {
        path: "projects/spotify_karaoke",
        element: <SpotifyKaraoke />,
    }
]

const projects = [
    {
        title: "Spotify Karaoke",
        url: "spotify_karaoke",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Video Sonification",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Multimodal Music Accessibility",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Orb Weaver",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "NASA Diminished Reality",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Voicemail",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "FOREST Dance Editor",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Synchronized Swimming Auditory Interface",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Nyan Cat (Remix)",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
    {
        title: "Sync or Sink",
        url: "links",
        image: "orbweaver.png",
        tags: ["composition", "webdev"]
    },
]

const media = {
    desktop: "(min-width): 1024px",
    portrait: "(min-aspect-ratio): 1/1"
}

export { navRoutes, projectRoutes, projects };