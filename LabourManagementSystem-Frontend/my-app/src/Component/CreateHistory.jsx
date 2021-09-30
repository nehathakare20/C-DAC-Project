import React, { Component } from 'react';
import LabourService from '../Service/LabourService';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Container, Box, TextField} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ClearIcon from '@material-ui/icons/Clear';


class CreateHistory extends Component {
    constructor(props) {
        super(props)

        this.state ={
                
          
                aadharNo :'',
                prevExp : '',
                prevCompany : '',
                prevCity : '',
                prevAddress : '',
                prevState : ''

        }
        
        this.changeAdharNoHandler=this.changeAdharNoHandler.bind(this);
        this.changePrevExpHandler=this.changePrevExpHandler.bind(this);
        this.changePrevAddressHandler=this.changePrevAddressHandler.bind(this);
        this.changePrevCityHandler=this.changePrevCityHandler.bind(this);
        this.changePrevStateHandler=this.changePrevStateHandler.bind(this);
        this.changePrevCompanyHandler=this.changePrevCompanyHandler.bind(this);
        
        this.saveHistory=this.saveHistory.bind(this);

    }
    saveHistory=(l) =>{
        if(this.state.aadharNo === ''||this.state.aadharNo === null ||this.state.aadharNo === undefined){
            alert("Please Enter Valid Adhar Number")
            return
        }
        else if(this.state.prevAddress === ''||this.state.prevAddress === null ||this.state.prevAddress === undefined){
            alert("Please Enter Previous Address")
            return
        }
        else if(this.state.prevCity === ''||this.state.prevCity === null ||this.state.prevCity === undefined){
            alert("Please Enter Previous City")
            return
        }
        else if(this.state.prevState === ''||this.state.prevState === null ||this.state.prevState === undefined){
            alert("Please Enter Previous State")
            return
        }
        else if(this.state.prevExp === ''||this.state.prevExp === null ||this.state.prevExp === undefined){
            alert("Please Enter Previous Experience")
            return
        }

        else{  
             l.preventDefault();

            console.log(this.state.aadharNo);

            let history={aadharNo:this.state.aadharNo,prevAddress:this.state.prevAddress,
            prevCity:this.state.prevCity,prevState:this.state.prevState,prevExp:this.state.prevExp,
            prevCompany:this.state.prevCompany};

        console.log('labour => '+ JSON.stringify(history));
        
        alert("History Successfully Submitted !!!")

        LabourService.createHistory(history).then(res =>{
        
            this.props.history.push('/');
        });
        
    }   
    }
    changePrevExpHandler=(event) =>{
        this.setState({prevExp:event.target.value});
    }
    
    changeAdharNoHandler=(event) =>{
        this.setState({aadharNo:event.target.value});
    }
    
    changePrevAddressHandler=(event) =>{
        this.setState({prevAddress:event.target.value});
    }

    changePrevCityHandler=(event) =>{
        this.setState({prevCity:event.target.value});
    }
    changePrevStateHandler=(event) =>{
        this.setState({prevState:event.target.value});
    }
   
    changePrevCompanyHandler=(event) =>{
        this.setState({prevCompany:event.target.value});
    }
    
    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <>
            <div className="star2">
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
                    <h3 className="text-center"><AddBoxIcon/>&nbsp;Add History</h3>
                    </Typography>
            </Toolbar>
        </AppBar>
                            <TextField
                            label="Adhar Number"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Adhar Number"  name="aadharNo" className="form-control"
                            value={this.state.aadharNo} onChange={this.changeAdharNoHandler}
                            />

                            <TextField
                            label="Previous Experience"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Previous Experience"  name="prevExp" className="form-control" value={this.state.prevExp} onChange={this.changePrevExpHandler}
                            />

                            <TextField
                            label="Previous Company"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Previous Company"  name="prevCompany" className="form-control" value={this.state.prevCompany} onChange={this.changePrevCompanyHandler}
                            /> 

                            <TextField
                            label="Previous City"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Previous City"  name="prevCity" className="form-control" value={this.state.prevCity} onChange={this.changePrevCityHandler}
                            />       

                            <TextField
                            label="Previous Address"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Previous Address"  name="prevAddress" className="form-control" value={this.state.prevAddress} onChange={this.changePrevAddressHandler}
                            /> 
                            
                            <TextField
                            label="Previous State"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            type="nuumber"
                            placeholder="Please Enter the Previous State"  name="prevState" className="form-control" value={this.state.prevState} onChange={this.changePrevStateHandler}
                            />     

                            <button className="btn btn-success" onClick={this.saveHistory}><HowToRegIcon/>&nbsp;Submit</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}><ClearIcon/>&nbsp;Cancel</button>  
            </Box>
           </Container>
            </div>
        </>
        );
    }
}

export default CreateHistory;