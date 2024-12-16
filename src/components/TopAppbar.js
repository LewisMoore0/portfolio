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
            <Link underline='none' color='inherit' href='/'> LewisMooreDev </Link>
          </Typography>
          <Button sx={{ p:1 }} color='inherit' href='/contact' underline='none'>Get in touch!</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

