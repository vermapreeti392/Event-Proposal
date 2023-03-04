import React from "react";
import "../../login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
    const navigate = useNavigate()
    const [data, updatereg] = useState({ email: "", password: "", name: "", contact: "", confirmpassword: "" })
    const hanlde = async () => {
        if(!data.email || !data.password || !data.email  || !data.contact ){
            toast.warn('please provide all details!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(data.password.length < 6){
            toast.warn('Password is too weak !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(data.password !== data.confirmpassword){
            toast.warn('Password not Matched', {
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
            const response = await fetch("https://event-proposal.onrender.com/userregister", {
                method: 'POST',
                mode : "cors",
                headers: {
                    "content-Type": 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    password: data.password,
                    email: data.email,
                    contact: data.contact,
                })
            })
            const res = await response.json()
            console.log(res)
            if(res.message === "user already exists"){
                toast.warn('Email is already Registered', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else if(res.message === "User Contact already exists."){
                toast.warn('Contact is already Registered', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else if(res.message === "user created successfully"){
                toast('Account Created Successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/userlogin")
            }
        }
    }
    const handle2 = () =>{
        navigate("/register")
    }
    return (
        <div className="main">
            <div className="registerpage">
                <div className="head">
                    <div className="Vendor" id="vendor" onClick={handle2}>Vendor</div>
                    <div className="User" >User</div>
                </div>
                <p className="sign">Register in your Account</p>
                <div>
                    <input placeholder="Name" type="text" className="phone" value={data.name} onChange={(e) => { updatereg({ ...data, name: e.target.value }) }} name="name"></input>
                </div>
                <div>
                    <input placeholder="Email" type="email" className="password" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }} name="email"></input>
                </div>
                <div>
                    <input placeholder="Contact" type="text" className="password" value={data.contact} onChange={(e) => { updatereg({ ...data, contact: e.target.value }) }} name="contact"></input>
                </div>
                <div>
                    <input placeholder="Password" type="password" className="password" value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }} name="password"></input>
                </div>
                <div>
                    <input placeholder="Confirm Password" type="password" className="password" value={data.confirmpassword} onChange={(e) => { updatereg({ ...data, confirmpassword: e.target.value }) }} name="confirmpassword"></input>
                </div>
                <div className="foot">
                    <button className="create"><Link className="link" to="/">Sign in</Link></button>
                    <button className="btn" onClick={hanlde}>REGISTER</button>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    )
}

export default UserRegister