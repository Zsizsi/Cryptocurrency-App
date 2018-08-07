import React, { Component } from "react";
class BtnSortByRank extends Component {
    render() {

    return(
        <div className="buttons">
            <button id="btnSortRank" onClick={this.props.handlerSortByRank}>Sort By Rank</button>
        </div>
    );    
    }
}

export default BtnSortByRank;