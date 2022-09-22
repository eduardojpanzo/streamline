import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    :root{
        --white:#fff;
        --black:#000;
        
        --gray-100:#e1e1e6;
        --gray-300:#c4c4cc;
        --gray-400:#8d8d99;
        --gray-500:#787878;
        --gray-600:#616161;
        --gray-700:#323238;
        --gray-800:#202024;
        --gray-900:#121214;

        --violet-500:#7159c1;
        
        --transparent-white: rgba(255, 255, 255, 0.7);
        --transparent-black: rgba(0, 0, 0, 0.7);
        --transparent: #ecf1f0;
    }

    html,border-style,#root{
        height:100%;
    }

    body{
        font:14px 'Roboto',sans-serif;
        background:#fff;
        color:#333;
        -webkit-font-smoothing:antialiased !important;
    }

    ul{
        list-style:none;
    }
    button{
        padding: 0.4rem 0.8rem;
        border:none;
        outline: none;
        transition: filter 0.2s;
        cursor: pointer;
        border-radius:4px;

        &:hover{
            filter: brightness(0.82);
        }
    }
`