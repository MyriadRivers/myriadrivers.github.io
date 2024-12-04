import { ReactNode } from "react";

enum ProjectTag {
    uiux = "👤 UI/UX",
    engineering = "🖥️ Engineering",
    fun = "⭐ Fun"
}

interface Section {
    shortTitle: string,
    title: string,
    summary?: string,
    contents: ReactNode
}

interface Project {
    title: string,
    dateRange: string,
    subtitles?: Array<{ title: string, text: string }>,
    summary: string,
    links: Array<{ text: string, url: string }>,
    media: ReactNode,
    sections: Array<Section>
}

export { ProjectTag, type Section, type Project };