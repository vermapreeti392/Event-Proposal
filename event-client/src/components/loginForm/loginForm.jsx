import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme} from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme();

export default function SignIn() {
  const [detail, setDetails] = useState({email:"",password:""})
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(detail)
  };

  return (
   
      <Container component="main" sx={{
        m:0,
        p:2,
        pt:4,
        width:'23vw',
        border:1,
        border:'none',
        borderRadius:2,
        backgroundColor:'white',
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m:0,
            mb:1
          }}
        >
          <Typography component="h1" variant="h5" sx={{
             fontSize:20,
          }}>
            Sign in Your Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{setDetails({...detail,email:e.target.value})}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setDetails({...detail,password:e.target.value})}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Create Account"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

  );
}