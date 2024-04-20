import React from 'react'
import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../components/images/hp.jpg'
import img2 from '../../components/images/hp2.jpg'
import img3 from '../../components/images/hp3.jpg'
import img4 from '../../components/images/hp4.jpg'
import img5 from '../../components/images/hp5.jpg'
import img6 from '../../components/images/hp6.jpg'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
const Hotel = () => {


  const [slideNumber, setSlideNumber]= useState(0);
  const [open, setOpen]= useState(false);
  const photos =[
    {
      // src: require('../../images/image1.jpg').default
      // src:require('../../components/images/h5.jpg' ).default
      src:img1
    },

    {
     src:img2
    },

    {
      src:img3
    },

    {
      src:img4
    },

    {
      src:img5
    },

    {
      src:img6
    },
];

const handleOpen=(i)=>{
  setSlideNumber(i);
  setOpen(true)
}


const handleMove=(direction)=>{
let newSlideNumber;

if(direction==='l'){
  newSlideNumber= slideNumber===0?5:  slideNumber-1;
}
else{
  newSlideNumber= slideNumber===5?0:  slideNumber+1;
}
setSlideNumber( newSlideNumber)
}
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        {  open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark}  className='close'  onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'  onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'  onClick={()=>handleMove("r")}/>

        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'> Book Now !</button>
          <h1 className="hotelTitle">Tower Street Apartment..!</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
           <span> Elton St 125 New York </span>
          </div>

          <span className='hotelDistance'>
            Excellent Location - 500m from center
          </span>

          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free Airport taxi
          </span>

<div className="hotelImages">
  {photos.map((photo,i)=>(
    <div className="hotelImgWrapper">
      <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
    </div>

    
  ))}
</div>

<div className="hotelDetail">
  <div className='hotelDetailTexts'>
    <h1 className="hotelTitle">Stay in the Heart Of Krakow</h1>
    <p className="hotelDesc">
    Nestled in the heart of the city, our hotel offers a prime location near key attractions and landmarks, ensuring guests can easily explore the vibrant surroundings. With a range of amenities including a refreshing pool, rejuvenating spa, and delightful dining options, we cater to every traveler's needs. Our spacious and modern rooms, including accessible options, guarantee a comfortable stay, while our dedicated staff provides friendly and efficient service, going above and beyond to ensure a memorable experience. Whether traveling for business or leisure, our hotel promises a warm and inviting atmosphere, making it the perfect choice for your next stay.
    </p>
  </div>

  <div className="hotelDetailPrice">
    <h1>Perfect for 9-night stay!</h1>
    <span> Located inreal heart of krakow,this property has an excellent location score of 9.8</span>
  <h2>
    <b>Rs.18,000</b>(9 nights)
  </h2>
  <button>Book Now!</button>
  
  </div>
</div>
        </div>

        <MailList/>
        <Footer/>

      </div>
    </div>
  )
}

export default Hotel
