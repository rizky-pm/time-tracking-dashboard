import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;

        @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
            font-size: 14px;
        }
    }

    body {
        color: ${(props) => props.theme.colors.paleBlue};
        background-color: ${(props) => props.theme.colors.veryDarkBlue};
        font-family: 'Rubik', sans-serif;
    }
`;

export default GlobalStyles;
