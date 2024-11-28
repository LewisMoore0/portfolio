import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';

export default function TopAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link color='inherit' href='/'> LewisMooreDev </Link>
          </Typography>
          {/* <Link sx={{ p:1 }} color='inherit' href='/'>Home</Link> */}
          {/* <Link sx={{ p:1 }} color='inherit' href='#about'>About</Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

