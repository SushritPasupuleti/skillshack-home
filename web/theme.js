import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const darkTheme = responsiveFontSizes(createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#6D22C8',
            light: '#8128EF',
            dark: '#53199B',
        },
        secondary: {
            main: '#C8227D',
            light: '#F32797',
            dark: '#AC1D6C',
        },
        error: {
            main: red.A400,
        },
        background: {
            // paper: '#424242',
            // paper: '#0E0E2C',
            paper: '#2B2E31',
            // default: '#303030',
            default: '#06090D',
        },
        success: {
            main: '#31D0AA',
            light: '#34F0C3',
            dark: '#29B895',
        },
        custom: {
            background: '#000'
        }
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
        }
    },
    props: {
        MuiCard: {
            // variant: 'nooutline'
        }
    }
}));

const lightTheme = responsiveFontSizes(createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#6D22C8',
            light: '#8128EF',
            dark: '#53199B',
        },
        secondary: {
            main: '#C8227D',
            light: '#F32797',
            dark: '#AC1D6C',
        },
        error: {
            main: red.A400,
        },
        background: {
            // paper: '#fff',
            paper: '#FAFCFE',
            default: '#fafafa',
        },
        success: {
            main: '#31D0AA',
            light: '#34F0C3',
            dark: '#29B895',
        },
        custom: {
            background: '#fff'
        }
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
        }
    },
    props: {
        MuiCard: {
            variant: 'outlined'
        }
    }
}));

export const themes = {
    darkTheme: darkTheme,
    lightTheme: lightTheme,
}