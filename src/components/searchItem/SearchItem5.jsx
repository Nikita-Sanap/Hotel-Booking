import React from 'react'
import './SearchItem.css'
import n9 from '../../components/images/h2.jpg'
const SearchItem5 = () => {
  return (
    <div className='searchItem'>
      <img src={n9} alt="" className="siImg" />
    <div className="siDesc">
<h1 className="siTitle">Palolem Beach View Inn</h1>
{/* <span className='siDistance'>500m from center</span> */}
<span className="siTaxiOp">Free Airport Taxi</span>
<span className="siSubtitle">Deluxe Double Room with Sea View</span>
    <span className="siFeatures">1 large double bed</span>
    <span className="siCancleOp">Free Cancellation</span>
    <span className="siCancleOpSubtitle">You can cancel later, so lock in this greate price today!</span>
    </div>

    <div className="siDetails">
      <div className="siRating">
        <span>Better</span>
        <button>8.8</button>
      </div>
      <div className="siDetailTexts">
        <span className='siPrice'>Rs.18,000</span>
        <span className='siTaxOp'>Includes Taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
      </div>
    </div>
    
    </div>
  )
}

export default SearchItem5
