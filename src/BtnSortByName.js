import React, { Component } from "react";

class Buttons extends Component {
    render() {

    return(
        <div className="buttons">
            <button id="btnSortName" onClick={this.props.handlerSortByName}>Sort By Name</button>
        </div>
    );    
    }
}

export default Buttons;