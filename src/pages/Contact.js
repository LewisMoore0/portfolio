import { TextField, Box, Button, useTheme, Alert, Dialog } from '@mui/material'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const theme = useTheme()
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_m77hh05', 'template_ggl6beg', form.current, {
          publicKey: 'xLHEKuX8eOH8ssnPD',
        })
        .then(
          () => {
               console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: 1, padding: 5}}>
                <TextField label='First Name' name='first_name' sx={{ paddingBottom: 3}}/>
                <TextField label='Last Name' name='last_name' sx={{ paddingBottom: 3}}/>
                <TextField label='Email Address' name='user_email' sx={{ paddingBottom: 3}}/>
                <TextField label='Message' name='message' multiline rows={10} sx={{ paddingBottom: 3}}/>
                <Button type='submit' value="Send" sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>Send</Button>
            </Box>
        </form>

    )
}