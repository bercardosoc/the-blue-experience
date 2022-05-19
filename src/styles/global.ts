import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

:root {
    --independence: #3F3D56;
    --dark-night: #646688;
    --white: #FFFFFF;
    --australian: #DCDCE1;



    --light-blue: #d5def5;
    --blue: #8594e4;
    --purple:#6643b5;
    --hot-purple:#430f58;
    --rich-black: #010b13;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Koulen', cursive;
}

body {
    color: var(--rich-black);
    font-family: 'Courier New', Courier, monospace
}

button {
    cursor: pointer
}

`