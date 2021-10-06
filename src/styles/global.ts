import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        text-decoration: none;
        outline: none;
    }

    :root {
        --color: #61DAFB;
        --white: #FFFFFF;
        --black: #282C34;
        --black2: #24282F;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: var(--black2);
    }

    button { 
        cursor: pointer;
    }
`;