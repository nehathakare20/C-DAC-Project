import React, { Component } from 'react';
import LabourService from '../Service/LabourService';

class viewHistoryByAadharNo extends Component {
    constructor(props) {
        super(props)
        console.log("we are in viewHistoryByAadharNo ");

        this.state ={
            aadharNo: this.props.match.params.aadharNo,
              history : []
        }
    }


    componentDidMount(){
        console.log("we are in viewHistoryByAadharNo componentDidMount 1");

        LabourService.getHistoryByAadharNo(this.state.aadharNo).then(res =>{
                this.setState({history : res.data});
                console.log("we are in viewHistoryByAadharNo componentDidMount");
        });
    }


    cancel(){
        this.props.history.push(`/`);
        }

    render() {
        console.log("we are in viewHistoryByAadharNo rendar");
        
        return (
           
           <div className="bgi1">
        
                 <div>
                     <br/>
                     <br/>
                        <button className="btn btn-primary float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Log Out</button>
                        </div>
               
                    <h3 className="text-center" style={{color:"Red"}}>View Labour History</h3>
                   
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
                          
                             {
                               this.state.history.map(
                                history=>
                                      <tr key={history.id}>
                                      <td>{history.prevExp}</td>
                                      <td>{history.prevCompany}</td>
                                      <td>{history.prevAddress}</td>
                                      <td>{history.prevCity}</td>
                                      <td>{history.prevState}</td>
                                                                        
                                  </tr>
                               )}
                      </tbody>
                            </table>
                           
                </div>
      
        );
    }
}

export default viewHistoryByAadharNo;