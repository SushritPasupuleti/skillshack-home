import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        // marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        paddingLeft: '5%',
        marginBottom: '1rem',
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
                    <Link key={tag.name} href={"/blog/categories/"+tag.slug}>
                        <Chip color="primary" label={tag.name} className={classes.chip} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Categories
