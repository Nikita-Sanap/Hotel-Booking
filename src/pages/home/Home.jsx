import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/property/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>

        <div className="homeContainer">

        <h1 className='homeTitle' style={{ fontWeight: 'bold' }}>Trending Destinations</h1>
            <Featured/>

          <h1 className='homeTitle'>Browse by Property type</h1>
          <PropertyList/>

          <h1 className="homeTitle">Home Guest Love</h1>
          <FeaturedProperties/>
          
          <MailList/>
          <Footer/>
          
          </div>
    </div>
  )
}

export default Home
