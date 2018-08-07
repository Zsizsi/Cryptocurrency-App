import React, { Component } from "react";

class BtnSortByPrice extends Component {
    render() {

    return(
        <div className="buttons">
            <button id="btnSortPrice" onClick={this.props.handlerSortByPrice}>Sort By Price</button>
        </div>
    );    
    }
}

export default BtnSortByPrice;