import React, { Component } from 'react';
import LabourService from '../Service/LabourService';


class ExperienceLetter extends Component {
    constructor(props) {
        super(props)

        this.state ={
            aadharNo: this.props.match.params.aadharNo,
            labour : {}
        }

       this.print=this.print.bind(this)
    }

    componentDidMount(){
        LabourService.getLabourAdharNo(this.state.aadharNo).then(res =>{
                this.setState({labour : res.data});
        });
    }

   print(){

       this.props.history.push('/certificate');
   }
   
    render() {
        return (
            
            <div className="text-black-100 bg-white text-left ">
            <br></br>
                <div>
                
                <button className="btn btn-primary float-left" onClick={this.print}>Print</button>
                
                </div>
                <br></br>
                <br></br>
                <div className="border border-dark font-italic font-weight-bold">
                 <img className="center-image"src={"https://upload.wikimedia.org/wikipedia/commons/2/26/Seal_of_Maharashtra.png"}/>
                 
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{this.state.labour.name}
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;{this.state.labour.permAddress}

            <h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.labour.permCity}</h5>

            <div>&nbsp;&nbsp;&nbsp;&nbsp;Dear concerned,

<p>&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that {this.state.labour.name} was employed as a {this.state.labour.role} with our company {this.state.labour.currCompany}.We certify that he/she has worked with the company from 2 years</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp; {this.state.labour.name} started working with the company as an {this.state.labour.role} and showcased his/her sincere efforts and excellent performance which later was employed as a permanent &nbsp;&nbsp;&nbsp;&nbsp;employee with the company.</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;His/Her contributions to the organization and its success will always be appreciated.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; We at {this.state.labour.currCompany} wish you all the best in your future endeavours.</p>

&nbsp;&nbsp;&nbsp;&nbsp;Please feel free to contact us for any information.
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp;For {this.state.labour.currCompany}
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp;(Signature)
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;Chief Labour Officer
<br></br>
</div>
<br></br>

            </div>
            </div>
        );
    }
}

export default ExperienceLetter;