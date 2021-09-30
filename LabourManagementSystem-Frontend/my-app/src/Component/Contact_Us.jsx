import React, { Component } from 'react'


export class Contact_Us extends Component {
   
     
    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
           <div className="bgi">

       
              <h2>Labour Management System</h2><br></br>
            <h4>  For more information contact:<br/><br/>
               Postal Address :<br/>
                   Ministry of Labour & Employment<br/>
                      Govt. of India,<br/>
                 Shram Shakti Bhawan<br/>
                   Rafi Marg.<br/>
New Delhi-110001<br/>
India<br/><br/></h4>
       
             

          <button className="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}><h4>HOME</h4></button>
    </div>
        
       
       
       
       

        );
    }
}

export default Contact_Us
