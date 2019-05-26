/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import './SearchBar.css';
class SearchBar extends Component {
  constructor(props) {
    super(props);
//initial state
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
//bind methods
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
//sort options
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }
// active class to sortOption
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }
//set sortBy
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }
//set term
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }
//set location
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
//send data to server and get response
  handleSearch(event) {
    if(this.state.term && this.state.location && this.state.sortBy){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }else{
      alert('please fill all input')
    }
    event.preventDefault();
  }
//list of options to sorting
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={() => this.handleSortByChange(sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }
//render app
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;