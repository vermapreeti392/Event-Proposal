import React from 'react'
import Navbar from './Navbar'
import "./ProposalList.css"
import {MdSearch } from "react-icons/md";
import {MdFilterAlt} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import {MdModeEditOutline} from 'react-icons/md'

export default function ProposalList({setModal}) {

  return (
    <>
    <Navbar/>
      <div className='container mt-3'>      
     <div className='event-header'>
        <div>
         <h3>Proposals</h3>
         <MdSearch className='searchic mt-2 ms-3'/>
         <input className='ms-2 mt-0' style={{border: 'none', opacity: '0.5', outline: 'none'}} type="search" placeholder='Search projects'/>
        </div>
        <div>
          <span> <MdFilterAlt className='filteric mt-2'/> </span>
         <button className='create-btn' onClick={()=>setModal(true)}>Create</button>
        </div>
     </div>
     <div className='event-details mt-2 py-2 px-3'>
      <div>
       <h4>Event Nmae</h4>
       <p>paragraph .,kjkl' ..................................</p>
      </div>
      <div className='event-main'>
           <div className='event-head'>
             <div>
               <p>
                 event type
               </p>
               <p>marriage</p>
             </div>
             <div>
               <p>
                 Proposal Type
               </p>
               <p>
                venue
               </p>
             </div>
             <div>
               <p>
                 date from
               </p>
               <p>
                02/06/2023
               </p>
             </div>
             <div>
               <p>
                 DateTo
               </p>
               <p>
                04/09/2023
               </p>
             </div>
             <div>
               <p>
                 budget
               </p>
               <p>
               5555555
               </p>
             </div>
           </div>
           <div>
              <MdModeEditOutline/>
              <MdDeleteOutline/>              
           </div>
      </div>
     </div>
   </div>
    </>
    
  )
}

