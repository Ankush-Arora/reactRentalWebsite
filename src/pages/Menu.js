import React from 'react'
import Layout from '../components/Layout/Layout'
import { MenuList } from '../data/Data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import '../styles/HomeStyle.css' 
const Menu = () => {
    return (
            <Layout>
                {/* <h1>Menu page</h1> */}
                <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                {
                    MenuList.map((menu)=>(
                        <Card sx={{maxWidth:'300px',maxHeight:'300px',m:2}}>
                            <CardActionArea>
                                <CardMedia component={'img'} src={menu.image} alt={menu.name}  />
                                <CardContent>
                                    <Typography varient='h5' sx={{ml:'2px',textAlign:'left',fontFamily:'cursive' }}>
                                       <p className='datafield'><b>{menu.name} </b> &nbsp;&nbsp;<b>₹</b>{menu.price}/day </p>
                                    </Typography>
                                    <Typography varient='h5' sx={{ml:'2px',textAlign:'left',fontFamily:'cursive' ,"& span":{ml:3}}}>
                                      <p>  {menu.description}  <span>Seats: {menu.seats}</span></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
                </Box>
            </Layout>
    )
}

export default Menu
