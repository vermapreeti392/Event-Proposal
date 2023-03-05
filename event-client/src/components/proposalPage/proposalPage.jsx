import React from "react";
import "./proposalStyle.css"
import DetailProposal from "../cards/detailProposal";
import { Box } from "@mui/system";
import StandardImageList from "../photos/photos";
import Button from '@mui/material/Button';
import Navbar from "../proposal List/Navbar";
import { Avatar, Grid } from "@mui/material";


const ProposalPage =(props)=>{
    //console.log(props.data);
   
    return (

        <>       

        <div className="secondary">
            
            <div className="proposalBlock">
                    <Box onClick={()=>{props.proposalClicked(false)}} sx={{
                        // pl:1.5,
                        pb:1,
                        cursor: 'pointer',
                        fontWeight:"600",
                        fontSize:20,
                        color:"#484848",
                    }}>{`Proposal < ${props.data.postedBy.name} Contract`}</Box>
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
                        Venue and Arrangements
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
                      My Albums
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
                        Contact | 3
                    </Box>
                    <Grid container>
                        <Grid item xs={4} sx={{
                            display:'flex',
                            justifyContent: 'center'
                        }}><Avatar sx={{
                            height:75,
                            width:75,
                            mb:2,
                        }}>P</Avatar></Grid>
                        <Grid item xs={4} sx={{
                            display:'flex',
                            justifyContent: 'center'
                        }}><Avatar sx={{
                            height:75,
                            width:75
                        }}>S</Avatar></Grid>
                        <Grid item xs={4} sx={{
                            display:'flex',
                            justifyContent: 'center'
                        }}><Avatar sx={{
                            height:75,
                            width:75
                        }}>V</Avatar></Grid>
                        <Grid item xs={4} sx={{
                            pl:4
                        }}>{props?.data?.postedBy.contact}</Grid>
                        <Grid item xs={4}>+91 XXXXXXXXXX</Grid>
                        <Grid item xs={4}>+91 XXXXXXXXXX</Grid>
                    </Grid>
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