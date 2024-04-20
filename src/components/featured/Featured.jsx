import React from 'react'
import './Featured.css'
import n1 from '../images/banglore.jpg';
import n2 from '../images/mumbai.jpg';
import n3 from '../images/tajmahal.jpg';
import n4 from '../images/img4.jpg';


const Featured = () => {
  return (
    <div className='featured'>


        <div className="featuredItem">
            <img src={n1} alt='paste img here' className='featuredImg' />
              <div className="featuredTitle">
                <h2>Banglore</h2>
                {/* <h3>123 properties</h3> */}
            </div>
        </div>
      
        <div className="featuredItem">
            <img src={n2} alt='paste img here' className='featuredImg' />
              <div className="featuredTitle">
                <h2>Mumbai</h2>
                {/* <h3>387 properties</h3> */}
            </div>
        </div>
      
        <div className="featuredItem">
            <img src={n3} alt='paste img here' className='featuredImg' />
              <div className="featuredTitle">
                <h2>Delhi</h2>
                {/* <h3>532 properties</h3> */}
            </div>
        </div>
      
    </div>
  )
}

export default Featured
