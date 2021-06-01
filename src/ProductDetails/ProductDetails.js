import React from 'react';
// import ProductData from './ProductData';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    // console.log(props.data);

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productImg]
        if (pos === props.currentPreviewImgPos) {
            classArr.push(classes.selectedproductImg);
        }
        return (
            <img
                key={pos}
                className={classArr.join(' ')}
                src={item.imageUrl}
                alt={item.styleName}
                onClick={() => props.onColorOptionClick(pos)}
            />
        );
    });

    const featureList = props.data.featureList.map((item, pos) => {

        const classArr = [classes.featureItem]
       
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.selectedfeatureItem);
        }

        return (
            <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>);
    });

    return (
        <div className={classes.productData}>
            <h1 className={classes.productTitle}>{props.data.title}</h1>
            <p className={classes.productDescription}>{props.data.description}</p>

            <h3 className={classes.sectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
                {/* <img className={[classes.productImg, classes.selectedproductImg].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color Watch" />
                <img className={classes.productImg} src="https://imgur.com/PTgQlim.png" alt="Red Color Watch" />
                <img className={classes.productImg} src="https://imgur.com/Mplj1YR.png" alt="Blue Color Watch" />
                <img className={classes.productImg} src="https://imgur.com/xSIK4M8.png" alt="Purple Color Watch" /> */}
            </div>

            <h3 className={classes.sectionHeading}>Features</h3>
            <div>
                {featureList}
                {/* <button className={[classes.featureItem, classes.selectedfeatureItem].join(' ')}>Time</button>
                <button className={classes.featureItem}>Heart Rate</button> */}
            </div>
            <button className={classes.primaryBtn}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;