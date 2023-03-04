import React from 'react'
import './ProposalList.css'
export default function Navbar() {
    const name = JSON.parse(localStorage.getItem('vendorInfo'));
    // console.log(name);
    return (       

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
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
                </div>
            </div>
        </nav>
    )
}

