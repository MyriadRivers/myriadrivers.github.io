import styled from "styled-components";

const StyledLinkList = styled.div`
    .linksList {
        color: ${props => props.theme.accent};
        display: flex;
        flex-wrap: wrap;
        gap: 0.75em;
    }

    .individualLink {
        border: solid;
        padding: 5px;

        &:hover {
            font-style: ${props => props.theme.type === "monochrome" ? "italic" : ""};
        }
    }
`

const LinkList = ({ links }: { links: Array<{ text: string, url: string }> }) => {
    return (
        <StyledLinkList>
            {links.length > 0 && <div className={"linksList"}>
                {links.map((link, index) =>
                    <a href={link.url} className={"individualLink"} target="_blank" key={index} rel="noreferrer">{link.text} ↗</a>
                )}
            </div>}
        </StyledLinkList>
    )
}

export default LinkList;