import React, { Component } from 'react';
import LabourService from '../Service/LabourService';



class CompanyHistory extends Component {
    constructor(props) {
        super(props)

        this.state ={
            aadharNo: this.props.match.params.aadharNo,
            password: this.props.match.params.password,
            history : []
        }

        this.addHistory = this.addHistory.bind(this);
        this.back=this.back.bind(this);
        this.logOut=this.logOut.bind(this);
        this.ExpLetter = this.ExpLetter.bind(this);
        
    }
    componentDidMount(){
        LabourService.getLabourByAdharNoAndPassword(this.state.aadharNo,this.state.password).then(res =>{
                this.setState({history : res.data});
        });
    }
    addHistory(){
        this.props.history.push(`/add-history/`);

    }
    back(){
        this.props.history.push(`/login-labour`);
    }
    logOut(){
        
        this.props.history.push('/');
        
    }
    ExpLetter(aadharNo){
        this.props.history.push(`/experience-letter/${aadharNo}`);

    }
   
    render() {
        return (
            
            <div>
                <br></br>
                <div className="text-right">
                
                 <button  className="btn btn-info" onClick={this.logOut}>
                 Log Out </button>
                
                 </div>
                 <div>
                 <button style={{marginTop:"10px"}} onClick={this.addHistory} className="btn btn-primary float-right" >Add History</button>
                 <button onClick={() => this.ExpLetter(this.state.aadharNo)} className="btn btn-primary float-right">Experience Letter</button>
                 </div>

                <h2 className="text-center">Labours History</h2>
                
                <div className="text-left">
                    
               
                    <button style={{marginLeft:"10px"}} onClick={this.back} className="btn btn-primary ">Back
                  </button> 
                                         
                </div>
                <br></br>
                <div className="row">
                <table className="table table-dark table-striped table-bordered">
                    <thead>
                        <tr>
                        <th>Over All Experience</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>City </th>
                        <th>State</th>
                        <th>AadharNo</th>
                        </tr>
                    </thead>
                      <tbody>
                          
                          {
                               this.state.history.map(
                                history=>
                                  <tr key={history.id}>
                                  <td>{history.prevExp}</td>
                                      <td>{history.prevCompany}</td>
                                      <td>{history.prevAddress}</td>
                                      
                                     
                                      <td>{history.prevCity}</td>
                                      <td>{history.prevState}</td>
                                      <td>{this.state.aadharNo}</td>
                                      
                                      
                                  </tr>
                               )
    }
    
                      </tbody>
                      
                </table>
                
            </div>
            </div>
        );
    }
}

export default CompanyHistory;