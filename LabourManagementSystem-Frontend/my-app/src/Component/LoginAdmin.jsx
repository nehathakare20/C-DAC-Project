import React, { Component } from 'react';
import LabourService from '../Service/LabourService';
import {Container, Box, Typography, TextField, CircularProgress} from "@material-ui/core";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ClearIcon from '@material-ui/icons/Clear';


class LoginAdmin extends Component {
    userData;
    // In React, constructors are mainly used for two purposes:
//It used for initializing the local state of the component by assigning an object to this.state.
//It used for binding event handler methods that occur in your component.
    constructor(props) {
        super(props)

        this.state ={

                aadharNo:'',//11111
                password:'',//mansi
             }


        this.idInputHandler=this.idInputHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.loginLabour=this.loginLabour.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }

    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        }) }

    idInputHandler=(event) => {
        /*----*/ this.setState({aadharNo:event.target.value});
    }

    passwordHandler=(event) =>{
         this.setState({password:event.target.value});
    }

    
    loginLabour=(aadharNo,password)=>{
        if(this.state.aadharNo === "" || this.state.aadharNo === null|| this.state.aadharNo === undefined){
            alert("Please Enter Valid Adhar Number")
            return
        }
        
        else if(this.state.password === "" || this.state.password === null|| this.state.password === undefined){
           alert("Please Enter Valid Password")
            return
        }

        else{
            
            LabourService.getLabourByAdharNoAndPassword(this.state.aadharNo,this.state.password).then
              (
                  rese =>{

                      console.log(rese.data);
                      console.log('data is clicked');

                      localStorage.setItem('document',JSON.stringify(this.state.aadharNo));
                      //localStorage.setItem('document',JSON.stringify(this.state.password));

                        if(rese.data === 'NO_CONTENT'){
                         alert("You have entered Wrong data"); }
                         
                         else{

            /*--The history.push() 
            function belongs to react-router-
            dom and used to move from the current page 
            to another one. It takes the first argument as
            a destination path and a second argument as the state.--*/ 

                           this.props.history.push
                            ({
                                pathname: `/admin/labours/` + this.state.aadharNo,

                                state:{labour_data:rese.data }
                                
                             }) }
                           });

                      }  }


     componentDidMount(){
         this.userData = JSON.parse(localStorage.getItem('document'));
          console.log("we are in componentDidMount lagin labour ");
           if (localStorage.getItem('document')) {
           this.setState({
                aadharNo:this.userData.aadharNo  })
             } 
             
             else {
                 this.setState({
                        aadharNo:'' 
             }) }}


             
    cancel(){
        this.props.history.push('/');
    }


    render() {
        return (
            <div className="star">
            <br></br>
            <Container maxWidth="md">
            <Box bgcolor="primary.main"
            bg-img="StartPage"
            boxShadow="2"
            borderRadius="15px"
            textAlign="center"
            p="20px"
            mt="45px"
            >

           
                    
                        <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBASEg8PEBIQFQ0VEhISDQ8PFRYVFREWFhUVFRUYHSggGBolHRUVITEhJSksLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGS0dFR0tLSsrLS0tKystKy0tKy0rLSstKy0rLSsrLSstLSs3LSsrNysrNystNy03LS03LS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAgMFCAT/xABIEAACAQIEAwQHBAYHBgcAAAAAAQIDMQQRIWFBUXEFBgcSEyKBkZOx02KhssEyQ1OSorMUF0JSdOHwJHOCg9HSFiMlNERUcv/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAaEQEBAQEBAQEAAAAAAAAAAAAAARECMRJR/9oADAMBAAIRAxEAPwDeBM+QlyGyAN8EG+HEltFctt2wDftYbyJbdsW1dwLnlcZ8WTdjdgVPi9An7iX6C/T5gVPPoM8+gv0JsgLnyDfBHViMTCmvWnCC5ykor7zyMR3u7Pho8ZRz+y3U/CmB7jfDiG/eY2u/fZi/+Us/9xiP+w/Rh+9/Z8rYylm/7zdP8SRuU17jeXUZ5XOrD4inNeaE4VN4SUvkdm7MFz5hPi9CLmy31dgCYTz6Ev0+Yv0AqefQZ8iX0RdkAb4IN8CbItt2Ab95czjbdsqXO4HIAAcW+CJbRXLJ8ri27YC27ZLbti27Ytq7gLau5d2Tdhc2AXNlv0F+hL9PmAv0+Zb9CX6Hn9v9sU8LQnVnaOiiryk7RQF7b7aoYWn560/LGyS1lJ8orizWHbviLiqrcaCWGp8GvWqPrKy9i9pjXbXa1XFVpVass29Ix4QjnpGK5H4DpOU2uzEYidRuU5zqSd3OTk/ezrAKSAADsw+InTalCc6clZwk4P3ozDsLxFxVJpV8sTTXF5RqLpKz9vvMLAsa+g+xe2aGLp+koz80VeL0lF8pLgfvv0+Z899i9rVsLVjVpSyay8y4TjnrGS5G9Owe16eMoQrU9FLSUc9YyV4s52YqV6F+gvohfRF2RLTZDZDZC3UBbqLbtktu2Lau4C2ruVLixuwlxYHIAAcW/eyW3bK3kS2ruAtq7jdl3ZN2A3Zb9BfoS/T5gL9PmL9C36EfJANkaf8AE/tl1sV6CL/8vDerkrOo0nJ+zRexm2sbiFTpVJ8KcJyeyjFv8j53xFZznKcv0pylJ9ZPN/MvmJrrABaQAAAAAAAAzHwx7ZdHFegcsqeJyjsqiz8rXXVe1GHHOhWcJxnHSUJRkusXmvkLNa+kNkTZHTgsQqlKnONqkITXSUU/zO+3U4rLdSW3bFt2xbV3AW1dy7sbsm7Absq11JfV2KtegHLMAAcXpqTdlfNkXNgFzZb9BfoS/T5gL9PmW/Ql+g2QDZF2Q2RLaK4Hid9qvk7OxeV3Skv3so/maIN5d/l/6biuflj+OJo06ceJ6AAUkAAAAAAAAAAG9+5FXzdnYR3fo4r91uP5Ht23bMf7gadm4Xm4z/mSMgtq7nK+ukLau5d2N2N2YJuxfV2LfV2JfoAv0Knn0JfoXPlYDkAAOLXF8CX6Fa9xL9PmAv0+Yv0LfoTZAHyRdkNkLaIBbRC27YtuxbdsDx++FHzYDFq7dGq/3V5vyNCH0bi6KnTqRevnjOLX/wCotZfefOlSm4ylF3i3F9U8i+E9OIALSAAAAAAAAAHKnTcpKKvJpLq3kBvjudR8nZ+DTv6Gk/3l5vzPZ3Z04OiqdOnG3khCKXJKKWX3HaubOLoLmy31dhfV2JfoAv0F+gv0F9FYBfRWLnwQ2Q2QHIEKBxaz6C/QPXoTZANkXZDZEtogFtFcturFurJbdsBbdsW1dxbV3LuwG7NEd9sF6HH4mOWSlNzj0mvN8217De27NaeLvZrzoYlLRp0p/ig3/EvcVz6ytcAA6IAAAAAAAAD2+5WC9Nj8NHLSM1OXSHrfNJe08Q2P4Q9metXxMlokqcHv+lN/hXtZl8bGy92W+rsL6uxL9Dksv0F+gv0F9FYBfRWLshsibIBsirTTiS2iuVadWByAAHF8hsg3wRLaK4C2iuW27Ytu2S27YC27Ytq7i2ruN2Bd2Tdhc2L6uwFvq7Hmd4+y1i8NVovTzL1HymtYv3o9K/QX6AfOFalKMpQknGUHKMk+DTyaOBsXxQ7ttSeMpR9V5KukrPhPpZP2GujrLqAAGsAAAAAHOlTlKUYxTcpOMYpcW3kkb97tdkrC4WlR/uLOT5zesm/azBPC7u05S/plWOUY5qgmrvjU6LVL2mzb9COqqQv0+Yv0F+gvorEKL6KxdkNkTZANkLacS204ktu2Atu2VLK92S2ruVLiwOQIUDjJ8rktu2Vv3ktu2Atu2Lau4tq7l3YDdkXNhc2W+rsAvq7Ev0+Yv0+Yv0AX6C+iF9ENkBxq04yi4NKUZJqSazWTumuJqHvr3JnhpSq0E6mHerSTcqW0ucd/fzNwbINLLK+fP8zZcZZr5tBuLvB4e4Wu3Ok3h6jz/QSdNt84cPY0YVj/AA87Qpv1YU6y4OFRJ/uyyOk6icYkD3P/AAf2j/8ATq/w/wDU9HA+HfaFTLzwp0I8XUqJv92OY2GMSMy7ldyZ4lxrV06eHWTSealV2XKO/u5mYd3vD3C0Gp1W8RNarzxSpp81Dj7WzMEs9krIm9fjZHGlTSioxSjCKSjFLJZKyy5HK/QX6C+iIUX0Vhsi7ImyAuyJbTiLacRbdsBbdsW1dxbV3LuwG7CXFk3ZVrqByAzAHFvLqS2ruV6ak3YDdhc2N2W+rsAvq7Ev0F+nzF+gC/QX0R4Pb3e/B4XOM6vmmv1dNeeXR8I+1mBdr+JWKqZxoQjh48HpUn73ovcbObWa2vicTCnFuc4U4q8pzjFL2sxrtLv/ANn0c1GpKvLlSj5l+88l95p7GY2rVl5qtWpVlznOUvmfnLnDPpsPHeKNTVUMNCH2qk3N+6OXzPV8P++FTE1KtLESi6jylSyioJpaSjkuV/fyNTnfgcXOjVhVpvyzpyUovdcHs7D5jNfRdtXcu7PL7uds08Xh4V4tJvScf7k0tY/64Hp7s5rN2W+rsS+rsL9PmAv0MF8Qe+NTDVKVHDyj5161VuKmsn+jHLe/uMn7x9tU8Jh51p8NIRz1nNr1Yr83yND47FzrVZ1aj806knKT3fBbcCuYy1nmB8UqqyVbDQkuLpTcH7nn8zJuzvEDAVck6kqDfCrHypf8SzX3mlgV8xOvo7D4mnOKdKcKkXaUJxmuuaOy2iufOuDx1WjLzUqtSlLnCco+/K5l/Y3iViqeSrwjiI8ZaU5+9aP3E3lWtt23bFtXc8HsLvfg8VkoVfLVf6uovJLpHhL2M9/dktN2Tdjdi+rsAvq7FWvQl+hU8+gHIAAcXzJuytcXwF9XYBfV2JfoL9PmY/3w70U8FS4Tqzz9HTzv9qXKK+8D9/bvbmHwtPz1p+Vf2YrWc3yjHj1sar7x9/MVic4U28PRt5YP15L7U/yX3mOdp9o1cRUlVqzc5y4uyXKK4LY/KdJziLQAFMAAAAAHu90e8U8FXU9ZUp5KrBcVwkvtL/I3fg8VCtCNWElKnNJxaejR85mUdye9ksHPyVM54ab9aPGDf9uP5riT1zqpW6r9DpxmKhThKpUkoU4JuUnpojg+0aLo+n9LD0Pl83pPMvL5epp/vv3tljZ+SnnDDQfqxs5tf25fkuBEmttfj7394542v5tY0oZqlDkuLf2n/keEAdUgADAAADLO7nfzE4ZxjUbxFJaeWb9eK+zP8n9xiYFjX0D2H25h8ZD0lKaaX6UHpOL+1H/SPRv0Pnfs3tCrh6katKbhOPFWaztJcVsbo7od56eOpcIVaaXpaef8Ufsv7jnecVKyC/QufKxL6Kxc+CJa5ZAADi1zJfp8ytZ9CX6AdONxUadOpUm8oU4ylJ7JZ6Gge2+1KmKr1K03rN6Rz0jFfoxWyX5m1/FHFuHZ8ox09LUpU301k1/AaaL4iegAFpAAAAAAAAAAB+j+m1fReh9LP0Xm83o/M/L5ueR+cAAAAAAAAAAAAB+7sXtSpha9OtTbzg9VnkpRf6UXs0fhAH0ZgsXGrTp1KbzjUjGSezWfvO/ZGIeF2Kc+z4x/ZVKsF00mvxmXrTQ5V0UoBg4tZ9CX0RXyGyAwnxb/APY00uGIpfyqpqI274tr/Yaf+Ipfy6pqI6c+IoACmAAAAAAAAAAAAAAAAAAAAAAAAAAA254Rv/Yav+IqfyqRm606swjwjeWBq74ipl8KkZull1Zy69XHIAGNcW+CJsiyfIW6gY14h9nut2fVUU3Km41Urv1H638LkaRPpJpZa65/eal759xatGcq2Gg6lGTbcIrOVPmkryj0sXzU2MHABaQAAAAAAAAAAAAAAAAAAAAAAAAAzfub3GqVpxrYmDp0U01TkspVeSyvGPW4txrN/DzAOh2fS8yylVcqjXH1/wBH+FRMlS4skUkulkuGyKlxZxWpQAOLfvJbds5MiXHiBLau5d2EuLCXFgeV2l3cweIzlWw9OTf9pLyS9so5M8Kr4a4CWq/pFPaNZP8AFFmZZZ3GWfQ3aYwheGGBf63F/Eo/TC8MMC/1uL+JR+mZu9egfLgNrMjB14YYH9ri/iUfpl/qwwNvS4v4lH6Zm75IbIfVMjCH4YYG3pcX8Sj9MPwwwP7XF/Eo/TM3yytcZZbsfVMYQ/DDAr9bi/iUfph+GGB/a4v4lH6Zm6WWt2EuLG0yMI/qwwPGri/iUfpj+rDA8auLX/Mo/TM3S4sZZ3G0xhC8MMD+1xfxKP0wvDDAv9bi/iUfpmb5Z9A9eg2mMIXhhgX+txfxKP0yLwwwP7XF/Eo/TM4fLgHyQ2mMI/qwwP7XF/Eo/TI/DDA29Li/iUfpmcbIZZWH1TGEPwwwP7XF/Eo/TO2l4bdnxv8A0iptKsl+GKMyyy3YSy3Y2mPK7M7uYPDZOlh6cZcJNeeXslLNnq7sJcWEuLMabsLmMuYv0A5AAAAAAAAMAAAAAIUAAAAIUAAwAAAAIIACFAAAACFAAAACAAD/2Q=="} height="150px" />
                        <Typography variant="h5" color="textSecondary" ><b>Sign In</b></Typography>
                       
                        <h4>Adhar Number</h4>    
                           
                            <TextField
                            label="Adhar Number"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Please Enter Registered Adhar Number" name="aadharNo" className="form-control" value={this.state.aadharNo} onChange={this.handleChange}
                            />
                                  
                               <h4>Password</h4>     
                                <TextField
                                label="Password"
                                id="outlined-size-small"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                size="small"
                                name="password"
                                type="password" placeholder="Please Enter Valid Password"name="password" className="form-control" value={this.state.password} onChange={this.handleChange}
                                /> 
                                <br/>

                            {/*                                 
                                <br/>
                                    <CircularProgress size={54} thickness={40} color="primary" />
                                <br/>  */}
                                

                                <br/>
                                <button className="btn btn-success" onClick={this.loginLabour}><HowToRegIcon/>Submit</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}><ClearIcon/>Cancel</button>
                                
                        
               
                </Box>
                </Container>
                </div>
        );
    }
}

export default LoginAdmin;