import React, { useState } from "react";
import "../../login.css"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const VendorLogin = () => {
    const navigate = useNavigate()
    const [data , updatelogin] = useState({contact:"" , password:"" })
    const handle = async() =>{
        if (!data.contact || !data.password){
            toast.warn('Please provide a Contact and a password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else{
            const response = await fetch("http://localhost:5000/login/vendor", {
                method: 'POST',
                mode : "cors",
                headers: {
                    "content-Type": 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    password: data.password,
                    contact: data.contact,
                })
            })
            const res = await response.json()
            console.log(res.message);
            
            if(res.message === "User does not exists" ){
                toast.warn('User not Exists', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else if(res.message === "Invalid Credentials"){
                toast.warn('Wrong Password', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else  if(res.data.token){
                localStorage.setItem("jwt",res.data.token)
                toast('Login Successfull', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/proposalList")
            }
        }
        
        
    }
    const hanlde2 = () =>{
        navigate("/userlogin")
    }
    
    return (
        <>
        <div className="main">
        <div className="login">
            <div className="head">
                <div className="Vendor">Vendor</div>
                <div className="User" id="user" onClick={hanlde2}>User</div>
            </div>
            <p className="sign">Sign in your Account</p>
            <div>
                <input placeholder="Phone" className="phone" value={data.contact} onChange={(e) => { updatelogin({ ...data, contact: e.target.value }) }} name="contact"></input>
            </div>
            <div>
                <input placeholder="Password" className="password" value={data.password} type="password" onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} name="password"></input>
            </div>
            <button className="fg">Forget Password?</button>
            <div className="foot">
            <button className="create"><Link className="link" to="/register" >Create Account</Link></button>
                <button className="btn" onClick={handle}>SIGN IN</button>
            </div>
        </div>
        <ToastContainer  />
        </div>
        </>
    )
}

export default VendorLogin