import { ReactNode } from "react";

enum ProjectTag {
    uiux = "UI/UX",
    engineering = "Engineering",
    fun = "Fun"
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
    links: Array<{ text: string, url: string }>,
    tags: Array<ProjectTag>,
    media: ReactNode,
    sections: Array<Section>
}

export { ProjectTag, type Section, type Project };