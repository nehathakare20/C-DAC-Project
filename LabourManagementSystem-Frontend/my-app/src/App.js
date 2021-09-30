//import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import './App.css';
import StartPage from './Component/StartPage';
import LoginLabour from './Component/LoginLabour';
import ViewLaboursComponent from './Component/ViewLaboursComponent';
import LoginAdmin from './Component/LoginAdmin';
import CompanyHistory from './Component/CompanyHistory';
import viewHistoryByAadharNo from './Component/viewHistoryByAadharNo';
import UpdateLabour from './Component/UpdateLabour';
import CreateLabour from './Component/CreateLabour';
import CreateHistory from './Component/CreateHistory';
import ExperienceLetter from './Component/ExperienceLetter';
import AboutUs from './Component/AboutUs';
import Cerficate from './Component/Cerficate';
import Contact_Us from './Component/Contact_Us'


function App() {
  return (
    <div className="App"> 
    <Router>
    <div className="container-fluid">
               <Switch>

               <Route path="/" exact component={StartPage}></Route>
                 <Route path="/add-labour" component={CreateLabour}></Route>
                 <Route path="/login-admin"  component={LoginAdmin}></Route>
                 <Route path="/admin/labours/:aadharNo" component={ViewLaboursComponent}></Route>
                 <Route path="/view-labour/:aadharNo" component={viewHistoryByAadharNo}></Route>
                 <Route path="/update-labour/:aadharNo" component={UpdateLabour}></Route>
                 <Route path="/login-labour" component={LoginLabour}></Route>
                 <Route path="/add-history" component={CreateHistory}></Route>
                 <Route path="/aboutUs" component={AboutUs}></Route>
                 <Route path="/Contact_Us" component={Contact_Us}></Route>
                 <Route path="/certificate" component={Cerficate}></Route>
                 <Route path="/labours/:aadharNo/:password" component={CompanyHistory}></Route>
                 <Route path="/experience-letter/:aadharNo" component={ExperienceLetter}></Route> 
                 </Switch> 
      </div>
        </Router>   
    </div>
  
  );
}

export default App;
