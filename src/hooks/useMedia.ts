import { useEffect, useState } from "react";

function useMedia(mq: string) {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        setMatches(window.matchMedia(mq).matches);

        const mediaQuery = () => {
            setMatches(window.matchMedia(mq).matches);
        };

        window.addEventListener("resize", mediaQuery);

        return () => {
            window.removeEventListener("resize", mediaQuery);
        }

    }, [mq])

    return matches;
}

export default useMedia;