import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-1rem',
        // marginBottom: '1rem',
        paddingLeft: '3.5%',
    },
    avatar: {

    },
}));

export default function Posts(props) {
    const classes = useStyles();
    const [bookmarked, setBookmarked] = useState(false)

    return (
        <div className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={props.details?.avatar?.url} className={classes.avatar}>

                    </Avatar>
                }
                title={props.details?.node?.title}
                // subheader={moment(props.date?).startOf('hour').fromNow()
                //  + " - " + props.readingTime?.text
            // }
                // action={
                //     <IconButton aria-label="bookmark" onClick={() => { setBookmarked(!bookmarked) }}>
                //         {bookmarked === false ? (<BookmarkBorderIcon />) : (<BookmarkIcon />)}
                //     </IconButton>
                // }
            />
            <p>{props.details.excerpt}</p>
        </div>
    )
}