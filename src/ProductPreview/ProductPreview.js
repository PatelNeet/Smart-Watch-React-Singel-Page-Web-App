import React from 'react';
// import classes from './ProductPreview.module.css';
import classes from './ProductPreview.module.css';


const ProductPreview = (props) => {
    // console.log(props);

    //get time 
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.productPreview}>
            <img src={props.currentPreviewImg} alt='productPreview' />

            {
                props.currentSelectedFeature === 1 ?

                <div className={classes.heartBeatSection}>
                    <i className="fa fa-heartbeat" aria-hidden="true"></i>
                    <p>98</p>
                </div>

                :

                <div className={classes.timeSection}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }



        </div>
    );
}

export default ProductPreview;