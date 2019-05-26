import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
class BusinessList extends Component {
    render() {
        //if businesses exist 
        if(this.props.businesses && this.props.businesses.length > 0){  
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                   return <Business key={business.id} business={business}/>
                    })            
                }
            </div>
        );
        //if businesses was empty
        }else if(this.props.businesses && this.props.businesses.length < 1 && this.props.loading){
            return (
                <div className="BusinessList">
                    not found             
                </div>
            );
        //if businesses was undefined    
        }else if(typeof this.props.businesses && this.props.loading){
            return (
                <div className="BusinessList">
                    not found             
                </div>
            );
        //if businesses don't exist | first render list and before search    
        }else{
            return (
                <div className="BusinessList">
                    no business              
                </div>
            );  
        }
    }
}

export default BusinessList;