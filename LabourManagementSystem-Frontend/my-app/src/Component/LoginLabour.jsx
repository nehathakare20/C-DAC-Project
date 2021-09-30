

import React, { Component } from 'react';
import LabourService from '../Service/LabourService';

class LoginLabour extends Component {
    constructor(props) {
        super(props)

        this.state ={
                aadharNo:' ',
                password:' '
        }
        this.idInputHandler=this.idInputHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.loginLabour=this.loginLabour.bind(this);

    }


    idInputHandler=(event) => { 
        this.setState({aadharNo:event.target.value});
    }


    passwordHandler=(event) =>{
        this.setState({password:event.target.value});
    }
    

    loginLabour=(aadharNo,password)=>{
        LabourService.getLabourByAdharNoAndPassword(this.state.aadharNo,this.state.password).then
        (res =>{
            console.log(res.data);
        });
          this.props.history.push(`/labours/${this.state.aadharNo}/${this.state.password}`);
     }


    cancel(){
        this.props.history.push('/');
    }


    
    render() {
        return (
           <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">User login</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Adhar No</label>
                                    <input placeholder="aadharNo" name="aadharNo" className="form-control" value={this.state.aadharNo} onChange={this.idInputHandler}/>
                                  
                                   <label>Password</label>
                                    <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.passwordHandler}/>
                                    
                                    
                                </div>
                                <button className="btn btn-success" onClick={this.loginLabour}>Log In</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>cancel</button>
                                </form>
                        </div>

                    </div>

                </div>
            
        );
    }
}

export default LoginLabour;