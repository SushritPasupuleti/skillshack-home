import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        // marginBottom: '1rem',
        paddingLeft: '3.5%',
    },
    avatar: {

    },
    media: {
        height: 140,
        // width: '100%',
    },
}));

export default function Posts(props) {
    const classes = useStyles();
    const [bookmarked, setBookmarked] = useState(false)

    console.log("URL: ", props.details.featuredImage.node.sourceUrl)

    return (
        <div className={classes.root}>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <img
                    // className={classes.media}
                    style={{
                        width: '90%', marginBottom: '1rem',
                        // boxShadow: '0 5px 10px rgb(255 255 255 / 12%)' 
                    }}
                    src={props.details?.featuredImage?.node?.sourceUrl}
                // title="Contemplative Reptile"
                />
            </div>
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