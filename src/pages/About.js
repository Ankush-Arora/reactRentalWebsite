import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

const About = () => {
  return (
      <Layout  >
        <Box sx={{my:3,textAlign:'center',fontFamily:'cursive',"& h4":{fontWeight:"bold"},"& li":{textAlign:"initial",mr:8,ml:8},"& h5,h3":{color:'red'} }}>
          <Typography variant='h4' fontFamily={'cursive'}>Fastest Rental Service in Dehradun</Typography>
            <ul>
              <h3>Renting a vehicle is a convenient and flexible way to meet your transportation needs. Here's a short description key points to consider when renting any vehicle:</h3>
            <li><b>Vehicle Selection:</b> Choose from a wide range of vehicles, including cycles,cars,vans, SUVs, motorcycles, or even specialty vehicles like buses or luxury cars.</li>
            <li><b>Rental Duration:</b> Decide on the duration of your rental, whether it's for a few hours, a day, a week, or even longer, depending on your specific requirements.</li>
            <li><b>Reservation:</b> Make a reservation in advance to secure the vehicle you want. we rental allow bookings for customer convenience on phone calls or in our office.</li>
            <li><b>Driver Requirements:</b> Ensure you meet the minimum age requirement and have a valid driver's license. Additional documents, such as an international driver's permit or proof of insurance, may be required in some cases.</li>
            <li><b>Rental Agreement:</b> Read and understand the terms and conditions of the rental agreement, including rental rates, mileage limits, fuel policy, insurance coverage, and any additional fees or charges.</li>
            <li><b>Payment:</b> Be prepared to provide a valid credit card or payment method to secure the rental. Understand the payment structure, including the reservation deposit, rental fees, and any additional charges.</li>
            <li><b>Vehicle Inspection:</b> Before accepting the vehicle, inspect it for any existing damage and report it to the rental agency. Taking photos or videos can serve as documentation.</li>
            <li><b>Return Conditions:</b> Familiarize yourself with the return requirements, such as the fuel level, cleanliness, and drop-off location. Late returns may incur penalties.</li>
            <li><b>Safe Driving:</b> Follow all traffic laws, drive responsibly, and return the vehicle in the same condition as when you received it to avoid any penalties or charges.</li>
            <h5>Remember, these points are general guidelines, and it's essential to review the specific policies and procedures of the rental agency you choose to ensure a smooth and satisfactory rental experience</h5>
            </ul>
        </Box>
      </Layout>
    
  )
}

export default About
