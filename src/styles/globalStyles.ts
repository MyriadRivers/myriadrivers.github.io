import { createGlobalStyle } from 'styled-components'
import AsketNarrowOtf from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.otf";
import AsketNarrowEot from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.eot";
import AsketNarrowSvg from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.svg";
import AsketNarrowTtf from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.ttf";
import AsketNarrowWoff from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.woff";
import AsketNarrowWoff2 from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Asket Narrow";
        src: url(${AsketNarrowOtf}) format("otf"),
             url(${AsketNarrowTtf}) format("truetype"),
             url(${AsketNarrowSvg}) format("svg"),
             url(${AsketNarrowEot}) format("embedded-opentype"),
             url(${AsketNarrowWoff}) format("woff"),
             url(${AsketNarrowWoff2}) format("woff2");
    }

    body {
        font-family: "Asket Narrow";
        font-size: 16pt;

        padding: 0px;
        margin: 30px;

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }
`

export default GlobalStyle