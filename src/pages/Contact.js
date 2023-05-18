import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Bolt } from '@mui/icons-material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
 
      <Layout>
        {/* <h1>Contact Page</h1> */}
        <Box sx={{my:15,ml:10,mr:10,m:3,fontFamily:'cursive' ,color:'red'}}>
          <Typography variant='h4' fontFamily='cursive'>CONTACT US</Typography>
          <h3>You can contact us on the details which are given below</h3>
           </Box>
        <Box sx={{pr:18,pl:18,m:3,justifyContent:'center'}}>
          <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{bgcolor:'black',color:'white',textAlign:'center'}}>CONTACT DETAILS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell> <SupportAgentIcon sx={{color:'red', pl:1}}/><sup>: 1800-1800-1800 (Tollfree)</sup></TableCell>
              </TableRow>
              <TableRow>
                <TableCell> <MailIcon sx={{color:'red', pl:1}}/><sup>: ankush_arora_rental@.com (Mail us)</sup></TableCell>
              </TableRow>
              <TableRow>
                <TableCell> <CallIcon sx={{color:'red', pl:1}}/><sup>: 9876543210 (Call us)</sup></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </Box>
      </Layout>
    
  )
}

export default Contact
