import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Link from 'next/link';

const theme = createTheme({
    palette: {
        primary: red,
    },
    typography: {
        fontFamily: ['Fira Sans', ' sans-serif'].join(','),
        fontWeight: 700,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            // fontSize: "64px",
            // lineHeight: 1.167,
            letterSpacing: "-2%",
        },
        h2: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            // fontSize: "40px",
            // lineHeight: 1.167,
            letterSpacing: "-2%",
        },
        h3: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            // fontSize: "24px",
            // lineHeight: 1.167,
            letterSpacing: "-2%",
        },
        body1: {
            fontFamily: 'Fira Sans',
            fontWeight: 400,
            // fontSize: "24px",
            // lineHeight: 1.167,
            // letterSpacing: "-2%",
        },
        subtitle1: {
            fontFamily: 'Fira Sans',
            fontWeight: 400,
            // fontSize: "24px",
            // lineHeight: 1.167,
            // letterSpacing: "-2%",
        },
        subtitle2: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            // fontSize: "24px",
            // lineHeight: 1.167,
            // letterSpacing: "-2%",
        },
        body2: {
            fontFamily: 'Fira Sans',
            fontWeight: 400,
            // fontSize: '16px',
            lineHeight: '140%',
            // letterSpacing: "-2%",
        },
        button: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            // fontSize: '10px',
            lineHeight: '140%',
            letterSpacing: "3%",
        },
    }
});

export const BetaButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <Link href={`/progress`}>
                <a>
                    <Button variant="outlined" color="primary" style={{
                        borderRadius: '1rem',
                    }}>
                        <b>
                            We are in Beta 🎉
                        </b>
                    </Button>
                </a>
            </Link>
        </ThemeProvider>
    )
}