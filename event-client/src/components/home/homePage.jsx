import React, { useEffect } from "react";
import "../home/homeStyle.css"
import ImgMediaCard from "../cards/proposalCard";
import { Box } from "@mui/system";
import axios from "axios";
import CardActions from '@mui/material/CardActions';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';



const HomePage =()=>{
    
    const [isSelected, setSelected] = useState(true)
    // const [allProposal, setProposal] = useState([])

    // useEffect(()=>{

    // const token = window.localStorage.getItem("user:token")
    // let config = {
    //     headers: {
    //       Authenticate: token,
    //     }
    // }

    // axios.get("http://localhost:5000/getProposal" , config).then((res) => {
        
    //     if (res.status === 200) {
    //         setProposal(res.data)
    //     }
    // }).catch((err) => {
    //   console.log(err)
    // })

    // },[])

   
  

    return(
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
                <ImgMediaCard/>
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
                [1,2,3,4,5,6,7,8,9,10].map((data,index)=>{
                    return <span onClick={()=>{setSelected(true)}}> <ImgMediaCard data={data}/> </span> 
                })
            }
            </div>

         </div>
        </div>
    )

}

export default HomePage