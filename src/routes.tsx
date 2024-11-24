import Projects from "./pages/projects/Projects"
import About from "./pages/about/About"
import Home from "./pages/home/Home"

import troovImg from "./assets/images/troov.png"
import ejImage from "./assets/images/ej_affinity.png"
import spotifyKaraokeImg from "./assets/images/spotify_karaoke.png"
import videoSonificationImg from "./assets/images/video_sonification.png"
import sewSustainableImg from "./assets/images/sewsustainable.png"
import multimodalMusicImg from "./assets/images/multimodal_music.png"
import orbWeaverImg from "./assets/images/orb_weaver.png"
import nyanCatImg from "./assets/images/nyan_cat.png"
import syncOrSinkImg from "./assets/images/sync_or_sink.png"
import diminishedRealityImg from "./assets/images/diminished_reality.png";
import voicemailImg from "./assets/images/voicemail.png";
import auditoryInterfaceImg from "./assets/images/auditory_interface.png";

import SpotifyKaraoke from "./pages/projects/SpotifyKaraoke/SpotifyKaraoke"
import VideoSonification from "./pages/projects/VideoSonification/VideoSonification"
import SewSustainable from "./pages/projects/SewSustainable/SewSustainable"
import MusicAccessibility from "./pages/projects/MusicAccessibility/MusicAccessibility"
import OrbWeaver from "./pages/projects/OrbWeaver/OrbWeaver"
import DiminishedReality from "./pages/projects/DiminishedReality/DiminishedReality"
import Voicemail from "./pages/projects/Voicemail/Voicemail"
import NyanCat from "./pages/projects/NyanCat/NyanCat"
import SyncOrSink from "./pages/projects/SyncOrSink/SyncOrSink"
import AuditoryInterface from "./pages/projects/AuditoryInterface/AuditoryInterface"

import { Project, ProjectTag } from "./types"

interface ProjectInfo {
    title: string,
    url: string,
    image: string,
    tags: Array<ProjectTag>,
    content: Project

}

const navRoutes = [
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "about",
        element: <About />
    }
]

const projects = [
    {
        title: "Spotify Karaoke",
        url: "spotify_karaoke",
        image: spotifyKaraokeImg,
        tags: [ProjectTag.engineering],
        content: SpotifyKaraoke
    },
    {
        title: "Video Sonification",
        url: "video_sonification",
        image: videoSonificationImg,
        tags: [ProjectTag.engineering],
        content: VideoSonification
    },
    {
        title: "SewSustainable",
        url: "sewsustainable",
        image: sewSustainableImg,
        tags: [ProjectTag.uiux, ProjectTag.engineering],
        content: SewSustainable
    },
    {
        title: "Multimodal Music Accessibility",
        url: "music_accessibility",
        image: multimodalMusicImg,
        tags: [ProjectTag.engineering, ProjectTag.uiux],
        content: MusicAccessibility
    },
    {
        title: "Orb Weaver",
        url: "orb_weaver",
        image: orbWeaverImg,
        tags: [ProjectTag.engineering, ProjectTag.fun],
        content: OrbWeaver
    },
    {
        title: "NASA Diminished Reality",
        url: "diminished_reality",
        image: diminishedRealityImg,
        tags: [ProjectTag.uiux],
        content: DiminishedReality
    },
    {
        title: "Voicemail",
        url: "voicemail",
        image: voicemailImg,
        tags: [ProjectTag.fun],
        content: Voicemail
    },
    {
        title: "Artistic Swim Auditory Interface",
        url: "auditory_interface",
        image: auditoryInterfaceImg,
        tags: [ProjectTag.uiux],
        content: AuditoryInterface
    },
    {
        title: "Nyan Cat (Remix)",
        url: "nyan_cat",
        image: nyanCatImg,
        tags: [ProjectTag.fun],
        content: NyanCat
    },
    {
        title: "Sync or Sink",
        url: "sync_or_sink",
        image: syncOrSinkImg,
        tags: [ProjectTag.fun],
        content: SyncOrSink
    },
]

export { type ProjectInfo, navRoutes, projects };