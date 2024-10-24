import styled from "styled-components";
import linkIcon from "../assets/icons/external_link.png";

const StyledLinkList = styled.div`
    .linksList {
        color: ${props => props.theme.accent};
        display: flex;
        flex-wrap: wrap;
        gap: 0.75em;
    }

    .individualLink {
        border: solid;
        padding: 5px 10px;

        &:hover {
            font-style: ${props => props.theme.type === "monochrome" ? "italic" : ""};
            border: dashed;
        }
    }

    .externalLink {
        height: 1em;
        padding-left: 0.25em;
    }
`

const LinkList = ({ links }: { links: Array<{ text: string, url: string }> }) => {
    return (
        <StyledLinkList>
            {links.length > 0 && <div className={"linksList"}>
                {links.map((link, index) =>
                    <a href={link.url} className={"individualLink"} target="_blank" key={index} rel="noreferrer">{link.text}
                        <img className={"externalLink"} src={linkIcon} alt={"external link"}></img>
                    </a>
                )}
            </div>}
        </StyledLinkList>
    )
}

export default LinkList;