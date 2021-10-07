import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        blue: 'hsl(246, 80%, 60%)',
        softOrange: 'hsl(15, 100%, 70%)',
        softBlue: 'hsl(195, 74%, 62%)',
        lightRed: 'hsl(348, 100%, 68%)',
        limeGreen: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        yellow: 'hsl(43, 84%, 65%)',
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
    },
    breakpoints: {
        mobile: 'max-width: 480px',
        tablets: 'min-width: 481px',
        laptops: 'min-width: 769px',
        desktops: 'min-width: 1025px',
        xlScreens: 'min-width: 1201px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
