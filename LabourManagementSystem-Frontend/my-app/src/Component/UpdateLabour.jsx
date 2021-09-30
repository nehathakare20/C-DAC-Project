import React, { Component } from 'react';
import LabourService from '../Service/LabourService';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Container, Box, TextField} from "@material-ui/core";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CheckIcon from '@material-ui/icons/Check';

class UpdateLabour extends Component {
    constructor(props) {
        super(props)

        this.state ={
            aadharNo: this.props.match.params.aadharNo,
            currAddress : '',
            currCity : '',
            currState : '',
            currCompany:''
        }

        this.changeCurrentAddressHandler=this.changeCurrentAddressHandler.bind(this);
        this.changeCurrentCityHandler=this.changeCurrentCityHandler.bind(this);
        this.changeCurrentStateHandler=this.changeCurrentStateHandler.bind(this);
        this.changeCurrentCompanyHandler=this.changeCurrentCompanyHandler.bind(this);
        this.UpdateLabour=this.UpdateLabour.bind(this);
    }

    componentDidMount(){
        LabourService.getLabourAdharNo(this.state.aadharNo).then((res)=>{
            let labour=res.data;
           
            console.log("we are in update didmount ",res.data);
            this.setState({currAddress: labour.currAddress,
                currCity: labour.currCity,
                currState: labour.currState,
                currCompany:labour.currCompany
                 }); });}


    
    UpdateLabour=(l) =>{
        if(this.state.currState === ''|| this.state.currState === null || this.state.currState === undefined)
        {
            alert("Please Enter the Current State")
            return
        }
        else if(this.state.currAddress === ''|| this.state.currAddress === null || this.state.currAddress === undefined)
        {

            
            alert("Please Enter the Current Address")
            return
        }
        else if(this.state.currCity === ''|| this.state.currCity === null || this.state.currCity === undefined)
        {
            alert("Please Enter the Current City")
            return
        }
        else if(this.state.currCompany === ''|| this.state.currCompany === null || this.state.currCompany === undefined)
        {
            alert("Please Enter the Current Company")
            return
        }
        else{

        l.preventDefault();
        
        let labour={currState:this.state.currState,
            currAddress:this.state.currAddress,
            currCity:this.state.currCity,
            currCompany:this.state.currCompany};
            
        console.log('labour => '+ JSON.stringify(labour));
        alert("Labour Record Update Successfully !!!")
        LabourService.updateLabour(this.state.aadharNo,labour).then(res=>{
        this.props.history.push(`/`);

       });
    } }


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
  
    render() {
        return (
            <div className="star">
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
                    <h3 className="text-center"><PlaylistAddIcon/>&nbsp;Update Labour</h3>
                    </Typography>
            </Toolbar>
        </AppBar>
            
                            <TextField
                            label="Current Address"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Current Address"  name="currAddress" className="form-control" value={this.state.currAddress} onChange={this.changeCurrentAddressHandler}
                            /> 

                            <TextField
                            label="Current City"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Current City"  name="currCity" className="form-control" value={this.state.currCity} onChange={this.changeCurrentCityHandler}
                            /> 

                            <TextField
                            label="Current State"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Current State"  name="currState" className="form-control" value={this.state.currState} onChange={this.changeCurrentStateHandler}
                            /> 

                            <TextField
                            label="Current Company"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Current Company"  name="currComp" className="form-control" value={this.state.currCompany} onChange={this.changeCurrentCompanyHandler}
                            /> 
                            <button className="btn btn-success" onClick={this.UpdateLabour}><CheckIcon/>Submit</button>

        </Box>
        </Container>
            
        </div>
        );
    }
}

export default UpdateLabour;