import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LayoutBottom, LayoutContainer, LayoutLeftSideNav, LayoutThread } from '../containers/comment.layout.elements';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import BeenhereIcon from '@material-ui/icons/Beenhere';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: '1rem',
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        flex: '1 0 auto',
    },
}));

function Comment(props) {
    const classes = useStyles();

    const comment = props.comment;

    // const nestedComments = (props.comment.children || []).map(comment => {
    //     return (<div style={{ marginLeft: '1rem' }} key={comment.commentedOn.node.id}>
    //         <Comment comment={comment} isOwner={props.isOwner} />
    //     </div>)
    // });

    console.log("Comment: ", comment)

    return (
        // <Card className={classes.root}>
        <div>
            {/* <UserDetailsBlock display_picture={comment.display_picture} author_user_name={comment.author_user_name} createdAt={comment.createdAt}></UserDetailsBlock> */}
            <LayoutContainer>
                <LayoutLeftSideNav>
                    {/* <div className={classes.details}>
                        <IconButton aria-label="upvote" color={
                            notVoted ? "default" : (isUpvote === true ? "primary" : "default")
                        }
                            onClick={() => {
                                castVote(true);
                            }}
                        >
                            <ExpandLessIcon />
                        </IconButton>
                        <Typography variant="subtitle1" color="textSecondary" align="center">
                            {votes}
                        </Typography>
                        <IconButton aria-label="downvote" color={
                            notVoted ? "default" : (isUpvote === false ? "primary" : "default")
                        }
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </div> */}
                </LayoutLeftSideNav>
                <LayoutThread>
                    <MarkdownPreview input={comment.content}></MarkdownPreview>
                </LayoutThread>
                <LayoutBottom>
                    Bottom links
                </LayoutBottom>
            </LayoutContainer>
            <Divider style={{ marginTop: '1rem' }} />
            {/* {nestedComments} */}
            {/* <BackToTop /> */}
        </div>
    );
}

export default Comment