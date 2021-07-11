import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import MobileDrawer from './Drawer';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginBottom: '1rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#000',
    },
    toolbar: theme.mixins.toolbar,
    hamburger: {
        // display: 'flex',
        // // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('md')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('xl')]: {
        //     display: 'none',
        // },
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [anchor, setanchor] = useState("left");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <div className={classes.hamburger}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(anchor, true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Link href={"/"}>
                        <Typography variant="h6" className={classes.title}>
                            skillShack(⚡);
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {<MobileDrawer toggleDrawer={toggleDrawer} />}
            </Drawer>
        </div>
    );
}
