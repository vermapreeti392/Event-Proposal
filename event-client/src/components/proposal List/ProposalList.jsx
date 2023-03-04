import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./ProposalList.css"
import {  toast } from 'react-toastify';
import {MdSearch } from "react-icons/md";
import {MdFilterAlt} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import {MdModeEditOutline} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProposalList() {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState([]); 
  const [searchProposal, setSearchProposal] = useState('');
  const notifyMsg = ()=>toast.success("Deleted Successfully");
  useEffect( ()=>{
    const getItem = async () => {
      try {
        const resp = await fetch('https://event-proposal.onrender.com/allProposal',{
          headers:{
            "authenticate":localStorage.getItem("jwt")
        }
        })
          .then(res => res.json())
          .then(data => {
            setProposal(data.data);           
          })
      }
      catch (e) {
        console.log(e)
      }
    }
    if(searchProposal===""){
      getItem()      
    }
    else{
      handleSearch();
    }
    
  }, [searchProposal])
  
  const handleSearch = ()=>{
    const data = proposal.filter(proposals=>
      proposals.eventName.toLowerCase().includes(searchProposal.toLowerCase())
    )
    setProposal(data);
  }
  // delete item 
  const handleDelete = async(id)=>{
      await fetch(`https://event-proposal.onrender.com/delete/${id}`,{
        method: 'delete',        
      })
      .then(res=>res.json())
      .then(data=>{
        setProposal(proposal.filter(proposal => proposal.id!= id));
        window.location.reload()       
        notifyMsg();
      })
  }
  return (
    <>
    <Navbar/>
      <div className='container mt-3'>      
     <div className='event-header'>
        <div>
         <h3>Proposals</h3>
         <MdSearch className='searchic mt-2 ms-3'/>
         <input onChange={(e)=>{setSearchProposal(e.target.value)}} className='ms-2 mt-0' style={{border: 'none', opacity: '0.5', outline: 'none'}} type="search" placeholder='Search projects'/>
        </div>
        <div>
          <span> <MdFilterAlt className='filteric mt-2'/> </span>
         <button className='create-btn' onClick={()=>navigate('/createPrposal')}>Create</button>
        </div>
     </div>     
      {
      proposal.map((item)=>{
          return(
            <>
            <div key={item._id} className='event-details mt-2 py-2 px-3' style={{color: "#081838"}}>
            <div >
       <h6 style={{textTransform: 'uppercase'}}>{item.eventName}</h6>
       <p>{item.description}</p>
      </div>
      <div className='event-main'>
           <div className='event-head'>
             <div>
               <p className='text-muted'>
                 Event Type
               </p>
               <p >{item.eventType}</p>
             </div>
             <div>
               <p className='text-muted'>
                 Proposal Type
               </p>
               <p>
                {item.proposalType}
               </p>
             </div>
             <div>
               <p className='text-muted'>
               From Date
               </p>
               <p>
                {item.date_from}
               </p>
             </div>
             <div>
               <p className='text-muted'>
               To Date
               </p>
               <p>
                {item.date_to}
               </p>
             </div>
             <div>
               <p className='text-muted'>
                 Budget
               </p>
               <p>
               {item.budget}
               </p>
             </div>
           </div>
           <div className='d-flex gap-4'>
              <Link to={"/update/"+item._id}>
              <MdModeEditOutline className='editic'/>
              </Link>
              <MdDeleteOutline className='dltic' onClick={()=>{handleDelete(item._id)}}/>              
           </div>
      </div>
            </div>
            </>
          )
      })
      }     
   </div>
    </>    
  )
}

