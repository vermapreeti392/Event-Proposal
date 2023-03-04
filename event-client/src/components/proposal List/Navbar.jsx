import React from 'react'
import './ProposalList.css'
import {MdLogout} from 'react-icons/md'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const notifyMsg = ()=> toast.success("logout successfully");
    const navigate = useNavigate();
    const name = JSON.parse(localStorage.getItem('vendorInfo'));
    const logout = ()=>{
        notifyMsg()
        localStorage.removeItem("jwt");
        navigate('/');
    }   
    return (    
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h3 className=" ms-5" style={{color: '#64A1F5' , fontSize: "29px"}}>LOGO</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                       
                    </ul>
                    <span className="navbar-text me-4 text-primary">
                        {name}                               
                    </span>
                    <span className='me-5'><img src={require('../../assets/img1.jpg')} alt="" style={{borderRadius: '50%'}} height="50px" width="50px" /></span> 
                    <span className='logout' onClick={logout}><MdLogout/></span>              
                </div>
            </div>
        </nav>
    )
}

