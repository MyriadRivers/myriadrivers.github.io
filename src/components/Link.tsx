import { ReactNode } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
    color: ${props => props.theme.accent};
    /* font-style: ${props => props.theme.type === "monochrome" ? "italic" : ""}; */
    text-decoration: ${props => props.theme.type === "monochrome" ? "underline" : ""};
`

const Link = ({ url, children }: { url: string, children: ReactNode }) => {
    return (<StyledLink href={url} target={"_blank"} rel="noreferrer">
        {children}
    </StyledLink>)
}

export default Link;