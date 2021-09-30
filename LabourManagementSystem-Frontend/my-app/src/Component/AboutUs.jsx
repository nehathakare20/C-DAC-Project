import React, { Component } from 'react';

class AboutUs extends Component {
    
    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
           <div className=".body" >

            <img src="./images/About_Us.jpg" width="350" height="200" />
              
              <h2>Labour Management System</h2><br></br>

              <p>Labour is the fundamental and active factor of production and has an important contribution to the production of commodities and to the economy on the whole. Like all the other production factors, Labour calls for thorough planning, organisation, implementation and control. Labour management is aimed at the efficient use of human resources and therefore increased labour productivity. 
Industrial Revolution 4.0 has altered the way we live, work, and relate to one another. It has brought people closer like never before. Also, it started the automation of traditional manufacturing and industrial practices, using modern smart technology.</p>
<p>
Effective labour management requires use of technology to track, monitor, manage the workforce. Digital tools can maximize productivity, decrease compliance risks, and streamline operations.</p>
<p>
Labour management system is introduced as relatively simple standalone system to provide services to the labourers and admin with a facility of direct contact with labour. It provides a robust database of all the labourers along with their correspondence and AADHAR data. The inculcation of AADHAR data and experience documentation has been made in order to render the employment services more secure and reliable.
The COVID-19 Pandemic posed an unprecedented challenge for governments across the world and brought humanity to its knees with certain people being left more vulnerable than the others such as Migrant Labourers. So, this system is designed with potential in the areas of tracking of labour, dissemination of information and disbursal of welfare benefits.
</p>

<button className="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}><h4>HOME</h4></button>
    </div>
        
       
       
       
       

        );
    }
}

export default AboutUs;