import React, { useEffect } from "react";
import "../home/homeStyle.css"
import ImgMediaCard from "../cards/proposalCard";
import { Box } from "@mui/system";
import axios from "axios";
import CardActions from '@mui/material/CardActions';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ProposalPage from "../proposalPage/proposalPage";
import Navbar from "../proposal List/Navbar";



const HomePage =()=>{
    
    const [isSelected, setSelected] = useState(false)
    const [isProposalClicked, proposalClicked] = useState(false)
    const [allProposal, setProposal] = useState([])
    const [selectedData, setSelectedData] = useState({})
    console.log(selectedData)

    useEffect(()=>{
    const token = window.localStorage.getItem("jwt")
    console.log("home page")
    console.log(token)
    let config = {
        headers: {
          Authenticate: token,
        }
    }

    axios.get("http://localhost:5000/findAllProposal" , config).then((res) => {
        
        if (res.status === 200) {
            console.log(res.data.data[3].albums[0].array[0])
            setProposal(res.data.data)

        }
    }).catch((err) => {
      console.log(err)
    })

    },[])

   
  

    return(
        <>
        <Navbar/>
        {
            isProposalClicked?
            <div>
                <ProposalPage proposalClicked={proposalClicked} setSelected={setSelected} data={selectedData}/>
            </div>:
            <div>
            <div className="topImage"></div>
            <div className="proposal_out"> 
             {isSelected&&<> <Box sx={{
                 fontSize:20,
                 pl:15,
                 pb:2,
                 color:'#696969'
              }}>Selected</Box> 
                  <div className="proposals">
                   <span onClick={()=>{setSelected(false)}}><CloseIcon/></span> 
                   <ImgMediaCard data={selectedData}/>
                   </div>
              
              </>
           }
               <Box sx={{
                 fontSize:20,
                 pl:15,
                 pb:2,
                 color:'#696969'
              }}>Proposals</Box> 
               <div className="proposals">
               {
                   allProposal.map((data,index)=>{
                       return <span> <ImgMediaCard key={index+1} data={data} proposalClicked={proposalClicked} setSelectedData={setSelectedData} /> </span> 
                   })
               }
               </div>
   
            </div>
           </div>
        }
        </>
    )

}

export default HomePage