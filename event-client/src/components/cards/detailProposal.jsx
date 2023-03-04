import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css"
import { Grid } from '@mui/material';
import { Box } from '@mui/system';


export default function DetailProposal(props) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80"
      />
      <div className='idPart'> ID:0001</div>
      <div className='outerBox'>
      <Box sx={{
        pb:3,
        borderBottom:2,
        borderColor:"#D3D3D3"
      }}>

      <Grid container>
        <Grid item xs={3} sx={{
          fontSize:12,
          color:"#A9A9A9",
          pt:0.5,
          pb:1
        }}>
          Name
        </Grid>
        <Grid item xs={9} sx={{
          fontSize:15,
          fontWeight:'600',
          pb:1
        }}>
          Vendor Name
        </Grid>
        <Grid item xs={3} sx={{
          fontSize:12,
          color:"#A9A9A9",
          pt:0.5
        }}>
          Email
        </Grid>
        <Grid item xs={9} sx={{
          fontSize:14,
          fontWeight:'500'
        }}>
          Preeti@gmail.com
        </Grid>
      </Grid>
      </Box>
      <Grid container >
        <Grid item xs={2.5} sx={{
          fontSize:12,
          color:"#A9A9A9",
          pt:0.5,
          pb:1
        }}>
          Start Date
        </Grid>
        <Grid item xs={3.5} sx={{
          fontSize:12,
          pt:0.5,
          pb:1,
          fontWeight:"600"
        }}>
          {props?.cardData?.date_from}
        </Grid>
        <Grid item xs={2.5} sx={{
          fontSize:12,
          color:"#A9A9A9",
          pt:0.5,
          pb:1
        }}>
          End Date


          
        </Grid>
        <Grid item xs={3.5} sx={{
          fontSize:12,
          pt:0.5,
          pb:1,
          fontWeight:"600"
        }}>
          {props?.cardData?.date_to}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} sx={{
          fontSize:13,
          color:"#A9A9A9",
          pt:0.5,
          pb:1,
          fontWeight:"500"
        }}>
           Event Type
        </Grid>
        <Grid item xs={6} sx={{
          fontSize:13,
          color:"#A9A9A9",
          pt:0.5,
          pb:1,
          fontWeight:"500"
        }}>
           Event Class
        </Grid>
        <Grid item xs={6} sx={{
          color:"#6495ED",
          fontWeight:'500'
        }}>
          {props?.cardData?.eventType}
        </Grid>
        <Grid item xs={6} sx={{
          fontWeight:'500'
        }}>
          Class A
        </Grid>
      </Grid>
      
      </div>
  
    </Card>
  );
}