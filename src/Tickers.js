import React, { Component } from 'react';
import axios from "axios";
import Card from './Card';
import BtnSortByName from './BtnSortByName';
import BtnSortByPrice from './BtnSortByPrice';
import BtnSortByRank from './BtnSortByRank';
import './App.css';


class Tickers extends Component {
    
    constructor(props) {
        super(props);
        this.handlerSortByName = this.handlerSortByName.bind(this);
        this.handlerSortByPrice = this.handlerSortByPrice.bind(this);
        this.handlerSortByRank = this.handlerSortByRank.bind(this);
        this.state = {
            data: [],
            manipulatedData: [],
        };
    }
/*--------handlers------------------------------------------------------*/ 

    handlerSortByName() {
        const sortedArray = this.state.data.sort(function(a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({manipulatedData: sortedArray});
    }

   handlerSortByPrice() {
        const sortedArray = this.state.data.sort(function (a, b) {
            return a["price_usd"] - b["price_usd"];
        });
        this.setState({manipulatedData:sortedArray});
    }

    handlerSortByRank () {
        const sortedArray = this.state.data.sort(function (a, b) {
            return a["rank"] - b["rank"];
        });
        this.setState({manipulatedData:sortedArray});
    }

/*-----fetch data-------------------------------------------------------------*/

    fetchData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=20")
        .then(response => {
            const result = response.data;
            this.setState({data:result});
            this.setState({manipulatedData:result});
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData();
    }
    
    
    render() {
        const tickers = this.state.manipulatedData.map((currency) =>
            <Card data={currency} key={currency.id} />
    );
    
        return (
           <div className="tickers-container">
                <div className="btn-div"> 
                    <BtnSortByName handlerSortByName={this.handlerSortByName}/>
                    <BtnSortByPrice handlerSortByPrice={this.handlerSortByPrice}/>
                    <BtnSortByRank handlerSortByRank={this.handlerSortByRank}/>
                </div>
                <ul className="tickers">{tickers}</ul>
            </div> 
        );
    }
}

export default Tickers;