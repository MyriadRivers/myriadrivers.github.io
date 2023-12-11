import { useEffect, useState } from "react";

function useMedia(mq: string) {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = () => {
            setMatches(window.matchMedia(mq).matches);
        };

        window.addEventListener("resize", mediaQuery);

        return () => {
            window.removeEventListener("resize", mediaQuery);
        }
    }, [])

    return matches;
}

export default useMedia;