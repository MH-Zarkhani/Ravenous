import React,{Component} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yalp from '../../util/Yalp';
class App extends Component {

  constructor(props){
    super(props);
//initial states   
    this.state = {
      businesses : [],
      loading : false
    }
//bind method     
    this.searchYelp = this.searchYelp.bind(this);
  }
//send data to api and get response
  searchYelp(term, location, sortBy) {  
    Yalp.search(term, location, sortBy).then(businesses => {
     this.setState (oldState => ({
        ...oldState,
        loading : oldState.loading = true,
        businesses 
      }));
    }).catch(error => {
      console.log(error);
    });
  }
//render app  
  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* render searchBar */}
        <SearchBar searchYelp={this.searchYelp}/>
        {/* render list of businesses */}
        <BusinessList loading={this.state.loading} businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
