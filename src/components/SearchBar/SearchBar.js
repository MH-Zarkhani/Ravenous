import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
    BestMatch : 'best_match',
    HighestRated : 'rating',
    MostReview  : 'review_count' 
   }
class SearchBar extends Component {

    renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    } 

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>

        )
    }
}

export default SearchBar;