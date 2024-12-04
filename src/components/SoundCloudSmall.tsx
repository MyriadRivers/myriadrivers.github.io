const SoundCloudSmall = ({ artist, track, artistURL, trackURL, trackID }: { artist: string, track: string, artistURL: string, trackURL: string, trackID: string }) => {
    return (
        <>
            <iframe
                title="SoundCloudSmall"
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackID}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}>
            </iframe>
            <div
                style={{
                    fontSize: "10px",
                    color: "#000000",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: "100"
                }}>
                <a
                    href={artistURL}
                    title={artist}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        color: "#000000",
                        textDecoration: "none"
                    }}
                >{artist}</a> · <a
                    href={trackURL}
                    title={track}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        color: "#000000",
                        textDecoration: "none"
                    }}
                >{track}</a>
            </div>
        </>
    )
}

export default SoundCloudSmall;