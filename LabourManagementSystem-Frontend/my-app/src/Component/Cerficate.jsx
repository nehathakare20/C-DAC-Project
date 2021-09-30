import React, { Component } from 'react';
import LabourService from '../Service/LabourService';

class Cerficate extends Component {
    constructor(props) {
        super(props)

        this.state ={
          
            
        }
        this.logOut=this.logOut.bind(this);
    }
  
    logOut(){
        this.props.history.push('/');
    }

    
    render() {
        return (
            <div>
               <button className="btn btn-light float-left" onClick={window.print()}>you successfully downloaded certificate</button> 
               <button  className="btn btn-primary float-right" onClick={this.logOut}>
                 Log Out </button>
            </div>
        );
    }
}

export default Cerficate;