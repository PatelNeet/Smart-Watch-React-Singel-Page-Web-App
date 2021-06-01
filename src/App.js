import React, { Component } from 'react';
import classes from './App.module.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';
import Footer from './Footer/Footer';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImgPos: 0,
    showHeartBeatSection: false,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    // console.log(pos);
    this.setState({ currentPreviewImgPos: pos });
  }

  onFeatureItemClick = (pos) => {
    // console.log(pos);
    // let updatedState = false;
    // (pos === 1) ?  updatedState = true : updatedState = false;
    // this.setState({showHeartBeatSection: updatedState})
    this.setState({ currentSelectedFeature: pos })
  }

  render() {
    return (
      <>
        <div className='App'>

          <Topbar />

          <div className={classes.mainContainer}>

            <ProductPreview
              currentPreviewImg={this.state.productData.colorOptions[this.state.currentPreviewImgPos].imageUrl}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />

            <ProductDetails
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImgPos={this.state.currentPreviewImgPos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />



          </div>

          <Footer />

        </div>
      </>
    )
  }
}

export default App;
