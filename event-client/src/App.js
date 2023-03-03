import './App.css';
import CreateProposal from './components/Create Proposal/CreateProposal';
// import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import ProposalList from './components/proposal List/ProposalList';
import UpdateProposal from './components/proposal List/UpdateProposal';
import VendorRegister from './components/Vendor/vendorregister';
import VendorLogin from './components/Vendor/vendorlogin';
import UserLogin from './components/User/userlogin';
import UserRegister from './components/User/userregister';


function App() {
  // const [modal, setModal ] = useState(false);
  return (
    <BrowserRouter>
     <div className="App">  
    <Routes>
      <Route path='/' element= {<VendorLogin />} ></Route>
      <Route path='/register' element= {<VendorRegister />} ></Route>  
      <Route path='/userlogin' element= {<UserLogin />} ></Route>  
      <Route path='/userregister' element= {<UserRegister />} ></Route>     
      <Route path='/proposalList' element= {<ProposalList />} ></Route>   
      <Route path='/createPrposal' element = {<CreateProposal/>}></Route>
      <Route path='/edit' element = {<UpdateProposal/>}></Route>
    </Routes>    
    </div>    
    </BrowserRouter>    
  );
}

export default App;
