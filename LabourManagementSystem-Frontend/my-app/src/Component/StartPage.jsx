import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel' ;
import "../index.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Grid } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';

class StartPage extends Component {
    
    constructor(props) {
        super(props)


        this.state ={
            labours :[]

        }
        this.addLabour = this.addLabour.bind(this);
    }




    addLabour(){
        this.props.history.push('/add-labour');
        }


    // loginLabour(){
    //     this.props.history.push({
    //         pathname:'/login-labour'
    //     });
    // }

    
    loginAdmin(){
        this.props.history.push('/login-admin');
    }



    render() {
        return (
            <>
            <div className="">
                <AppBar>
                 <Toolbar>
                <Typography>
                <Grid container spacing={2}>
                
                
                <br></br>
                
                <Grid item xl ={3}>
                    
                <Link to="/aboutUs">  
                <a className="nav-link active float-left">&nbsp;<h4>About-Us</h4>
                </a>

               </Link>
               </Grid>
                <Grid item xl ={3}>
                    
                <Link to="/Contact_Us">  
                <a className="nav-link active float-left">&nbsp;<h4>Contact_Us</h4>
                </a>
                </Link>
                </Grid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <Grid item xl ={3}>
                <Link to="/add-labour">  
                <button style={{marginLeft:"10px"}} onClick={() => this.addLabour} className="btn btn-info float-right"><PersonAddIcon/>&nbsp;Sign Up</button>
                </Link>
                </Grid>
               
                <Grid item xl ={3}>
                <Link to="/login-admin">
                <button style={{marginLeft:"10px"}} onClick={() => this.loginAdmin} className="btn btn-success float-right"><PersonOutlineIcon/>&nbsp;Sign In
                </button>
                </Link>
                </Grid>

                </Grid>
                </Typography>
            </Toolbar>
        </AppBar>
             </div>    



<br></br>
          <br></br>
          <br></br>
         
            <h1 style={{'color':"black"}} >Labour Management System </h1>  

              
                             
           <Carousel className="font-italic font-weight-bold">  
          <Carousel.Item style={{'height':"500px"}} >  
          <img style={{'height':"600px"}} 
           className="d-block w-100"  
           src={'https://www.hrinasia.com/wp-content/uploads/2017/03/office_decor.jpg'} alt="Los Angeles" width="1300" height="800"/>  
            
                  {/*                                                     
                        <Carousel.Caption>  
                       
                                 </Carousel.Caption>     
                                 </Carousel.Item> 
        <Carousel.Item style={{'height':"500px"}} >  
          <img style={{'height':"600px"}} 
           className="d-block w-100"  

                        src={'https://img.freepik.com/free-vector/meeting-business-people-avatar-character_24877-57276.jpg?size=626&ext=jpg'} alt="Los Angeles" width="1300" height="800"/>  
                       <Carousel.Caption>  
                       
    </Carousel.Caption>       


        </Carousel.Item> 
       
        <Carousel.Item style={{'height':"500px"}} >  
          <img style={{'height':"600px"}} 
           className="d-block w-100"  

                        src={'https://arizent.brightspotcdn.com/dims4/default/26948c3/2147483647/strip/true/crop/2120x1414+0+0/resize/825x550!/quality/90/?url=https%3A%2F%2Fsource-media-brightspot.s3.amazonaws.com%2Fda%2F55%2F336857ac4b86b3a30a832d578026%2F5.%20Mission%20statement.jpg'} alt="Los Angeles" width="1300" height="800"/>  
                          
                          <Carousel.Caption>  
                         
    </Carousel.Caption>              */}
        </Carousel.Item> 
                                 
          </Carousel>  
              
        </>
        );
    }
}

export default withRouter (StartPage);