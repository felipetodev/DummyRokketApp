import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: lighter;
        color: #333;
    }

    h3 {
        font-size: 1.3rem;
        color: #fff;
        padding: 1.5rem 0rem;
    }

    p {
        font-size: 0.8rem;
        line-height: 200%;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        width: 100%;
        display: block;
    }

    input{
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyles