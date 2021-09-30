import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabourService from '../Service/LabourService';

class ViewLaboursComponent extends Component {
    constructor(props)
       {
        super(props)

        this.state ={
            aadharNo: this.props.match.params.aadharNo,
            password: this.props.match.params.password,
            // A match object contains information about how a <Route path> matched the URL. 
            //match objects contain the following properties: params - (object) Key/ 
            //value pairs parsed from the URL corresponding to the dynamic segments of the path. ...url
            //- (string) The matched portion of the URL.
                labours :[]

        }

        this.editLabour = this.editLabour.bind(this);
        this.deleteLabour = this.deleteLabour.bind(this);
        this.viewLabour = this.viewLabour.bind(this);
        this.addHistory = this.addHistory.bind(this);

     }
 
    editLabour(aadharNo){
        this.props.history.push(`/update-labour/${aadharNo}`);
     }


    viewLabour(aadharNo){
        this.props.history.push(`/view-labour/${aadharNo}`);
    }



    deleteLabour(aadharNo){
       LabourService.deleteLabour(aadharNo).then(res => {
            this.setState({labours: this.state.labours.filter(labour => labour.aadharNo !== aadharNo)});
            });}

            
    componentDidMount(){

        console.log(this.props);
        console.log("we are in the  ViewLaboursComponent's componentDidMount" , this.props.location.state.labour_data);
        this.setState({labours:this.props.location.state.labour_data});   
      }

      
        ExpLetter(aadharNo){
            this.props.history.push(`/experience-letter/${aadharNo}`);
        } 

        addHistory(){
            this.props.history.push(`/add-history/`);
         }  
       

        logOut(){
            window.localStorage.removeItem('document');
            //this.props.history.push(`/`);          
        }
        



    render() {
        console.log("we are in the ViewLaboursComponent's rendar method ");
        return (
            <div className="bgi">
          <br></br>
         
            <div className="text-right">
            
            <Link to="/">
                 <button  className="btn btn-primary float-right" onClick={this.logOut}>
                 Log Out </button>
                 </Link>

                 </div>
                 <h2 className="text-center">Information</h2>
            
            
                    <div className="text-left">
                    <div>
                    <button style={{marginLeft:"10px"}}  onClick={() => this.ExpLetter(this.state.aadharNo)} className="btn btn-primary float-right">Experience Letter</button>
                    
                    
                    <button style={{marginBottom:"10px"}} onClick={this.addHistory} className="btn btn-primary float-right" >Add History</button>
                
                 </div>
                    <Link to="/login-admin">

                    <button style={{marginBottom:"10px"}} onClick={this.back} className="btn btn-primary ">back
                  
                  </button> 
                  </Link>   

                </div>
            <div className="row">
                      {
                              this.state.labours.length >=2  && 
                              this.state.labours.map
                              (
                                labours=>

                <table className="table table-dark table-striped table-bordered">
                    <thead>
                        <tr>
                        <th><b> Name</b></th>
                        <th> Adhar Number</th>
                        <th> Permenant Address</th>
                        <th> Permenant City</th>
                        <th> Permenant State</th>
                        <th> Current Company Name</th>
                        <th> Current Address </th>
                        <th>Current city</th>
                        <th>Current State</th>
                        
                        <th>Actions</th>
                        </tr>
                    </thead>
                      <tbody>
                         
                             
                                  <tr key={labours.aadharNo}>
                                      <td>{labours.name}</td>
                                      <td>{labours.aadharNo}</td>
                                      <td>{labours.permAddress}</td>
                                      <td>{labours.permCity}</td>
                                      <td>{labours.permState}</td>
                                      <td>{labours.currCompany}</td>
                                      <td>{labours.currAddress}</td>
                                      <td>{labours.currCity}</td>
                                      <td>{labours.currState}</td>
                                      
                                      <td style={{width:"10px"}}>
                                              <button onClick={() => this.editLabour(labours.aadharNo)} className="btn btn-info">Update</button>
                                              <button style={{marginTop:"10px"}} onClick={() => this.deleteLabour(labours.aadharNo)} className="btn btn-danger">Delete</button>
                                              <button style={{marginTop:"10px"}} onClick={() => this.viewLabour(labours.aadharNo)} className="btn btn-success">View History</button>
                                          </td>
                                  </tr>
                          
                          
                      </tbody>
                </table>
                )
                          }
                          </div>
                          <div>
                            {
                              this.state.labours.length <=2 && 
                              this.state.labours.map(
                                labours=>
                                <table className="table table-dark table-striped table-bordered">
                    <thead>
                        <tr>
                        <th> Over All Experience</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th> City </th>
                        <th> State</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                                  <tr key={labours.id}>
                                      <td>{labours.prevExp}</td>
                                      <td>{labours.prevCompany}</td>
                                      <td>{labours.prevAddress}</td>
                                      <td>{labours.prevCity}</td>
                                      <td>{labours.prevState}</td>
                                      
                                  </tr>
                                  </tbody>
                      
                </table>
                
                              )
                          }
                          
            </div>
        </div>
        );
    }
}

export default ViewLaboursComponent;