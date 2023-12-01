import { createGlobalStyle } from 'styled-components'
import AsketNarrowOtf from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.otf";
import AsketNarrowEot from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.eot";
import AsketNarrowSvg from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.svg";
import AsketNarrowTtf from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.ttf";
import AsketNarrowWoff from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.woff";
import AsketNarrowWoff2 from "../assets/fonts/AsketNarrowLight/AsketNarrowLight.woff2";

import AverageTtf from "../assets/fonts/Average/Average-Regular.ttf";
import AverageEot from "../assets/fonts/Average/Average-Regular.eot";
import AverageSvg from "../assets/fonts/Average/Average-Regular.svg";
import AverageWoff from "../assets/fonts/Average/Average-Regular.woff";
import AverageWoff2 from "../assets/fonts/Average/Average-Regular.woff2";

import NotoSansTtf from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.ttf";
import NotoSansEot from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.eot";
import NotoSansSvg from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.svg";
import NotoSansWoff from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.woff";
import NotoSansWoff2 from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.woff2";

import OswaldLightTtf from "../assets/fonts/OswaldLight/Oswald-Light.ttf";
import OswaldLightEot from "../assets/fonts/OswaldLight/Oswald-Light.eot";
import OswaldLightSvg from "../assets/fonts/OswaldLight/Oswald-Light.svg";
import OswaldLightWoff from "../assets/fonts/OswaldLight/Oswald-Light.woff";
import OswaldLightWoff2 from "../assets/fonts/OswaldLight/Oswald-Light.woff2";

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

    @font-face {
        font-family: "Asket Narrow";
        src: url(${AsketNarrowOtf}) format("otf"),
             url(${AsketNarrowTtf}) format("truetype"),
             url(${AsketNarrowSvg}) format("svg"),
             url(${AsketNarrowEot}) format("embedded-opentype"),
             url(${AsketNarrowWoff}) format("woff"),
             url(${AsketNarrowWoff2}) format("woff2");
    }

    @font-face {
        font-family: "Noto Sans";
        src: url(${NotoSansTtf}) format("truetype"),
             url(${NotoSansSvg}) format("svg"),
             url(${NotoSansEot}) format("embedded-opentype"),
             url(${NotoSansWoff}) format("woff"),
             url(${NotoSansWoff2}) format("woff2");
    }

    @font-face {
        font-family: "Oswald Light";
        src: url(${OswaldLightTtf}) format("truetype"),
             url(${OswaldLightSvg}) format("svg"),
             url(${OswaldLightEot}) format("embedded-opentype"),
             url(${OswaldLightWoff}) format("woff"),
             url(${OswaldLightWoff2}) format("woff2");
    }

    @font-face {
        font-family: "Average";
        src: url(${AverageTtf}) format("truetype"),
             url(${AverageSvg}) format("svg"),
             url(${AverageEot}) format("embedded-opentype"),
             url(${AverageWoff}) format("woff"),
             url(${AverageWoff2}) format("woff2");
    }

    body {
        font-family: "Average";
        font-size: 16pt;
        /* color: white; */

        margin: 0px;
        padding: 0px;

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;

        height: 100%;
    }

    html {
        height: 100%;
        margin: 0px;
        /* padding: 20px; */
    }

    #root, .App {
        height: 100%;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }
`

export default GlobalStyle