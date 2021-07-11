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
        marginBottom: '1rem',
        paddingLeft: '5%',
    },
    avatar: {

    },
}));

export default function AuthorDetails(props) {
    const classes = useStyles();
    const [bookmarked, setBookmarked] = useState(false)

    console.log("DP: ", props.details.node.avatar.url)

    return (
        <div className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={props.details.node.avatar.url} className={classes.avatar}>

                    </Avatar>
                }
                title={props.details?.node?.name}
                subheader={moment(props.date).startOf('hour').fromNow()
                //  + " - " + props.details?.node?.reading_time + " min read"
            }
                // action={
                //     <IconButton aria-label="bookmark" onClick={() => { setBookmarked(!bookmarked) }}>
                //         {bookmarked === false ? (<BookmarkBorderIcon />) : (<BookmarkIcon />)}
                //     </IconButton>
                // }
            />
            {/* <Typography variant="h6" color="initial">{props.thread?.thread?.details_user_name}</Typography> */}
            {/* <Typography variant="caption" color="initial">{moment(props.node.createdAt).startOf('hour').fromNow()}</Typography> */}
        </div>
    )
}