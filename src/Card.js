import React, { Component } from "react";
import './App.css';

class Card extends Component {

        render() {
            const {
                name,
                symbol,
                price_usd,
                percent_change_1h,
                percent_change_24h,
                rank,
            } = this.props.data;
        
        return(
            <li className="coin-details">
                <p className="coin-name"><span className="">Name:</span><span> {name} ({symbol})</span></p>
                <p className="price">Price: {price_usd}</p>
                <p className="percent-change">Change in 24 hour:{percent_change_24h}</p>
                <p>Change in an hour: {percent_change_1h}</p>
                <p>Rank: {rank}</p>
            </li>
        );
    }
}

export default Card;