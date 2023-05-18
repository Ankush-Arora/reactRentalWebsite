import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import img5 from '../images/img5.jpg'
 import '../styles/HomeStyle.css'  
const Home = () => {

  return (
        <Layout>
      <div className='home' style={{backgroundImage:`url(${img5})`}}>
      <div className='headerContainer'>
        <h1>Rent Now</h1>
        {/* */}
        <Link to='/menu'>
        <button>Available vehicles</button>
        </Link>
      </div>
      </div>
      </Layout>
    
  )
}

export default Home
