import React from "react";
import "./proposalStyle.css"
import DetailProposal from "../cards/detailProposal";
import { Box } from "@mui/system";
import StandardImageList from "../photos/photos";
import Button from '@mui/material/Button';
import Navbar from "../proposal List/Navbar";


const ProposalPage =(props)=>{
   
    return (

        <>       

        <div className="secondary">
            
            <div className="proposalBlock">
                    <Box onClick={()=>{props.proposalClicked(false)}} sx={{
                        pl:1.5,
                        pb:1,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848",
                    }}>{`Proposal < John Contract`}</Box>
                    <Box></Box>
                    <Box sx={{
                        pl:49
                    }}
                    ><Button onClick={()=>
                    {props.setSelected(true);
                     props.proposalClicked(false);
                     console.log("boton clij")   
                    }} variant="outlined">Select</Button></Box>
                <div className="itemA">
                  <DetailProposal cardData={props.data}/>
                </div>
                <div className="itemB">
                    <Box sx={{
                        pb:3,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848",
                        textAlign:"justify"
                    }}>
                        Venue and Arrangement
                    </Box>
                    {props?.data?.description}
                    </div>
                <div className="itemB">
                    <Box sx={{
                        pb:3,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848"
                    }}>
                        Food Preferences
                    </Box>
                    {props?.data?.food}
                    </div>
                <div className="item">
                <Box sx={{
                        pt:1,
                        pb:2,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848"
                    }}>
                      My Album
                    </Box>
                  <StandardImageList photos={props?.data?.albums[0].array}/>
                
                </div>
                <div className="itemB"> 
                   <Box sx={{
                        pb:3,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848"
                    }}>
                        Contact | 12
                    </Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur veritatis incidunt ratione reprehenderit, facere eveniet beatae nisi obcaecati tempora nostrum saepe quibusdam illo fugit, id rerum unde officia? Quaerat beatae cum mollitia reprehenderit tempore cumque, odit itaque nostrum sint provident qui eaque ex, perferendis delectus facere? Ipsam, aliquid atque?
                </div>
                <div className="itemB">
                   <Box sx={{
                        pb:3,
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848"
                    }}>
                        Events
                    </Box>
                    {props?.data?.events}
                </div>

            </div>






        </div>
        </>
    )

}

export default ProposalPage