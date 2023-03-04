import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState } from 'react';



export default function ImgMediaCard(props) {

  const [data, setData] = useState({})
 
  const handleClick =()=>{

    props.setSelectedData(props.data)
    props.proposalClicked(true)

  }
  
  return (
    <Card onClick={handleClick} sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props?.data?.albums[0].array[0]}
      />
      
      {/* <CardContent> */}

        <Grid container>
            <Grid item xs={12} sx={{
                fontSize:20,
                fontWeight:'500',
                p:1,
                pb:0,
                textAlign:"left"
            }}>
                {props?.data?.eventName}
            </Grid>
            <Grid item xs={12} sx={{
                mt:1,
                mb:1,
                fontSize:18,
                pl:1,
                textAlign:"left"
            }}>
                {props?.data?.budget}
            </Grid>
            <Grid item xs={12} sx={{
                fontStyle:'italic',
                fontSize:15,
                p:1,
                pt:0,
                pb:2,
                textAlign:"left"
            }} >
                {props?.data?.place}
            </Grid>
        </Grid>
      {/* </CardContent> */}
    </Card>
  );
}