import { createGlobalStyle } from 'styled-components'
import NotoSansTTF from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.ttf"
import NotoSansSVG from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.svg"
import NotoSansEOT from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.eot"
import NotoSansWOFF from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.woff"
import NotoSansWOFF2 from "../assets/fonts/NotoSansSC/NotoSansSC-Regular.woff2"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans";
        src: url(${NotoSansTTF}) format("truetype"),
             url(${NotoSansSVG}) format("svg"),
             url(${NotoSansEOT}) format("embedded-opentype"),
             url(${NotoSansWOFF}) format("woff"),
             url(${NotoSansWOFF2}) format("woff2");
    }

    body {
        font-family: "Noto Sans";
        background: pink;

        margin: 20px;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }
`

export default GlobalStyle