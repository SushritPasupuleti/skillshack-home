import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';

const HeaderImage = () => {
    const slopeStyles = useSlopeCardMediaStyles();
    return (
        <CardMedia
            component={'img'} // add this line to use <img />
            image={"/undraw_career_progress_ivdb.svg"}
            classes={slopeStyles}
        />
    );
};

HeaderImage.propTypes = {};
HeaderImage.defaultProps = {};


export default HeaderImage;