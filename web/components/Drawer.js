import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signin, signout, useSession } from 'next-auth/client'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    close: {
        marginLeft: '3rem',
        marginBottom: '1rem'
    }
});

export const MobileDrawer = ({ toggleDrawer }) => {
    const classes = useStyles();
    const [anchor, setanchor] = useState("left");

    return (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/* <IconButton onClick={toggleDrawer(anchor, false)}>
                    <CancelIcon className={classes.close} />
                </IconButton> */}
                <ListItem button key={'skillShack(⚡);'}>
                    {/* <ListItemText primary={'skillShack(⚡);'} /> */}
                    <ListItemText>
                        <Typography variant="h4" gutterBottom>
                        skillShack(⚡);
      </Typography>
                    </ListItemText>
                    <ListItemIcon onClick={toggleDrawer(anchor, false)}><CancelIcon className={classes.close} /></ListItemIcon>
                </ListItem>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
