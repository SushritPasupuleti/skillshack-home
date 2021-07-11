import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        // paddingLeft: '1rem'
    },
    chip: {
        // marginRight: '0.5rem',
    }
}));

const Categories = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.categories.map((tag, i) => {
                return (
                    <Chip color="primary" label={tag.name} key={tag.name} className={classes.chip} />
                )
            })}
        </div>
    )
}

export default Categories
