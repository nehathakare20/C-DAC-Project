import React, { Component } from 'react';
import LabourService from '../Service/LabourService';
import InfoIcon from '@material-ui/icons/Info';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Container, Box, TextField} from "@material-ui/core";


const regExp = RegExp(
    /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/
)

class CreateLabour extends Component {
    constructor(props) {
        super(props)
      

        this.state ={
                name : '',
                aadharNo : '',
                password : '',
                confirmpassword : '',
                permAddress : '',
                permCity : '',
                permState : '',
                currAddress : '',
                currCity : '',
                currState : '',
                currCompany :'',
               
                isError: {
                    name : '',
                    aadharNo : '',
                    password : '',
                    permAddress : '',
                    permCity : '',
                    permState : '',
                    currAddress : '',
                    currCity : '',
                    currState : '',
                    currCompany :''
                }
                

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAdharNoHandler=this.changeAdharNoHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler=this.changeConfirmPasswordHandler.bind(this);
        this.changePermAddressHandler=this.changePermAddressHandler.bind(this);
        this.changePermCityHandler=this.changePermCityHandler.bind(this);
        this.changePermStateHandler=this.changePermStateHandler.bind(this);
        this.changeCurrentAddressHandler=this.changeCurrentAddressHandler.bind(this);
        this.changeCurrentCityHandler=this.changeCurrentCityHandler.bind(this);
        this.changeCurrentStateHandler=this.changeCurrentStateHandler.bind(this);
        this.changeCurrentCompanyHandler=this.changeCurrentCompanyHandler.bind(this);
        
        this.saveLabour=this.saveLabour.bind(this);
    }
     

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                value.length < 4 ? "Atleast 4 characaters required" : "";
            break;
            case "aadharNo":
                isError.aadharNo =
                value.length < 10 ? "Please Enter Valid Adhar Number" : "";
                break;
            case "password":
                isError.password = regExp.test(value)
                    ? ""
                    : "Please Enter Valid Password";
                break;

            case "permAddress":
                isError.permAddress =
                value.length < 10 ? "Atleast 10 characaters required" : "";
                break;    

            case "permCity":
                isError.permCity =
                value.length < 3 ? "Atleast 3 characaters required" : "";
                break;  
            
            case "currAddress":
                isError.currAddress =
                value.length < 10 ? "Atleast 10 characaters required" : "";
                break;
                
               
            case "currCity":
                    isError.currCity =
                    value.length < 3 ? "Atleast 3 characaters required" : "";
                    break;  
                    
            case "currState":
                isError.currState =
                value.length < 3 ? "Atleast 3 characaters required" : "";
                break;          

            case "currCompany":
            isError.currCompany =
            value.length < 3 ? "Atleast 3 characaters required" : "";
            break; 
                
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value,
            
        })
    };

    saveLabour=(l) =>{  
     
        if(this.state.name === "" && this.state.name === null || this.state.name === undefined){
           alert("Please Enter the Name")
            return
        }
        else if(this.state.aadharNo === "" || this.state.aadharNo === null|| this.state.aadharNo === undefined){
            alert("Please Enter the Adhar Number")
            return
        }
        else if(this.state.permAddress === "" || this.state.permAddress === null|| this.state.permAddress === undefined){
           alert("Please Enter the Permanent Address")
            return
        }
        
        else if(this.state.permCity === "" || this.state.permCity === null|| this.state.permCity === undefined){
            alert("Please Enter the Permanent City")
            return
        }
        else if(this.state.permState === "" || this.state.permState === null|| this.state.permState === undefined){
            alert("Please Enter the Permanent State")
            return
        }
        else if(this.state.currAddress === "" || this.state.currAddress === null|| this.state.currAddress === undefined){
            alert("Please Enter the Current Address")
            return
        }
        else if(this.state.currCity === "" || this.state.currCity === null|| this.state.currCity === undefined){
            alert("Please Enter the Current City")
            return
        }
        else if(this.state.currState === "" || this.state.currState === null|| this.state.currState === undefined){
            alert("Please Enter the Current State")
            return
        }
        else if(this.state.currCompany === "" || this.state.currCompany === null|| this.state.currCompany === undefined){
            alert("Please Enter the Current Company")
            return
        }
        else{
            if(this.state.password===this.state.confirmpassword){
        l.preventDefault();
        let labour={name:this.state.name,aadharNo:this.state.aadharNo,password:this.state.password,permAddress:this.state.permAddress,
            permCity:this.state.permCity,permState:this.state.permState,currState:this.state.currState,currAddress:this.state.currAddress,currCity:this.state.currCity,
        currCompany:this.state.currCompany};
        console.log('labour => '+ JSON.stringify(labour));
        alert("Labour Added Successfully !!!")
        LabourService.createLabour(labour).then(res =>{
            this.props.history.push('/');
        });
    }
    else{
        alert("Password Not Matched !!!")
        return
    }
    }
}
    changeNameHandler=(event) => {
        this.setState({name:event.target.value});
    }
    changeAdharNoHandler=(event) =>{
        this.setState({aadharNo:event.target.value});
    }
    changePasswordHandler=(event) =>{
        this.setState({password:event.target.value});
    }
    changeConfirmPasswordHandler=(event) =>{
        this.setState({confirmpassword:event.target.value});
    }
    changePermAddressHandler=(event) =>{
        this.setState({permAddress:event.target.value});
    }
    changePermCityHandler=(event) =>{
        this.setState({permCity:event.target.value});
    }
    changePermStateHandler=(event) =>{
        this.setState({permState:event.target.value});
    }
    changeCurrentAddressHandler=(event) =>{
        this.setState({currAddress:event.target.value});
    }
    changeCurrentCityHandler=(event) =>{
        this.setState({currCity:event.target.value});
    }
    changeCurrentStateHandler=(event) =>{
        this.setState({currState:event.target.value});
    }
    changeCurrentCompanyHandler=(event) =>{
        this.setState({currCompany:event.target.value});
    }
    
    cancel(){
        this.props.history.push('/');
    }

    render() {
        const { isError } = this.state;
        return (
            <>
            <div className="star1">
            <br></br>
            <Container maxWidth="md">
            <Box bgcolor="primary.main"
            bgcolor="white"
            boxShadow="2"
            borderRadius="12px"
            textAlign="center"
            p="24px"
            mt="50px"
            >
           
        <AppBar position="relative">
            <Toolbar variant="dense">
                <Typography align="center">
                    <h3 className="text-center"><CreateIcon/>&nbsp;Add Labour</h3>
                    </Typography>
            </Toolbar>
        </AppBar>
                    <div className="card-body">
                        <form className="form-inside-input" >
                            <div className="form-group">
                            
                            <TextField
                            label="Name"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter The Name" name="name" className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"} 
                            value={this.state.name} onChange={this.changeNameHandler,this.formValChange}
                            />
                            {isError.name.length > 0 && (
                                <span className="invalid-feedback">{isError.name}</span>
                            )}
                                
                            <TextField
                            label="Adhar Number"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Adhar Number"  name="aadharNo" className={isError.aadharNo.length > 0 ? "is-invalid form-control" : "form-control"}
                            value={this.state.aadharNo} onChange={this.changeAdharNoHandler,this.formValChange}
                            />
                           {isError.aadharNo.length > 0 && (
                                <span className="invalid-feedback">{isError.aadharNo}</span>
                            )}

                            <TextField
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="password"
                            placeholder="Please Enter Your Password" name="password" className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} 
                            value={this.state.password} onChange={this.changePasswordHandler,this.formValChange}/>
                            {isError.password.length > 0 && (
                                <span className="invalid-feedback">{isError.password}</span>
                            )}
                            <small className="text-info"><InfoIcon/>&nbsp;[6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]</small>
                                
                            <TextField
                            label="Confirm Password"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="password"
                            placeholder="Please Confirm Your Password" name="confirmpassword" className={"form-control"} 
                            value={this.state.confirmpassword} onChange={this.changeConfirmPasswordHandler}/>


                            <TextField
                            label="Permanent Address"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Permanent Address" name="permAddress" className={isError.permAddress.length > 0 ? "is-invalid form-control" : "form-control"} value={this.state.permAddress} onChange={this.changePermAddressHandler,this.formValChange}
                            value={this.state.permAddress} onChange={this.changeNameHandler,this.formValChange}
                            />
                           {isError.permAddress.length > 0 && (
                                <span className="invalid-feedback">{isError.permAddress}</span>
                                )}
                               
                               
                            <TextField
                            label="Permanent City"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Permanent City" name="permCity" className={isError.permCity.length > 0 ? "is-invalid form-control" : "form-control"}
                            value={this.state.permCity} onChange={this.changePermCityHandler,this.formValChange}
                            />
                           {isError.permCity.length > 0 && (
                                <span className="invalid-feedback">{isError.permCity}</span>
                                )} 
                                
                                
                            <TextField
                            label="Permanent State"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Permanent State" name="permState" className={isError.permState.length > 0 ? "is-invalid form-control" : "form-control"}
                                value={this.state.permState} onChange={this.changePermStateHandler,this.formValChange}
                            />
                            {isError.permState.length > 0 && (
                                <span className="invalid-feedback">{isError.permState}</span>
                                )}

                            <TextField
                            label="Current Address"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Current Address" name="currAddress" className={isError.currAddress.length > 0 ? "is-invalid form-control" : "form-control"}
                                 value={this.state.currAddress} onChange={this.changeCurrentAddressHandler,this.formValChange}
                            />
                           {isError.currAddress.length > 0 && (
                                <span className="invalid-feedback">{isError.currAddress}</span>
                                )}   

                                <TextField
                            label="Current City"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Current City" name="currCity" className={isError.currCity.length > 0 ? "is-invalid form-control" : "form-control"}
                            value={this.state.currCity} onChange={this.changeCurrentCityHandler,this.formValChange}
                            />
                           {isError.currCity.length > 0 && (
                                <span className="invalid-feedback">{isError.currCity}</span>
                                )} 
                            
                            <TextField
                            label="Current State"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Current State" name="currState" className={isError.currState.length > 0 ? "is-invalid form-control" : "form-control"}
                                 value={this.state.currState} onChange={this.changeCurrentStateHandler,this.formValChange}
                            />
                            {isError.currState.length > 0 && (
                                <span className="invalid-feedback">{isError.currState}</span>
                                )}  

                                
                            <TextField
                            label="Current Company"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Your Current Company" name="currCompany" className={isError.currCompany.length > 0 ? "is-invalid form-control" : "form-control"} 
                                value={this.state.currCompany} onChange={this.changeCurrentCompanyHandler,this.formValChange}
                            />
                            {isError.currCompany.length > 0 && (
                                <span className="invalid-feedback">{isError.currCompany}</span>
                                )} 
                                                     
                            
                            </div>
                            <button type="submit" className="btn btn-success"  onClick={this.saveLabour}><HowToRegIcon/>&nbsp;Submit and back to login page</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}><ClearIcon/>&nbsp;Cancel</button>
                            </form>
                    </div>

                    </Box>
        </Container>
        </div>
        </>
        );
    }
}

export default CreateLabour;