import React from 'react'
import './SearchItem.css'
import n9 from '../../components/images/h9.jpg'
const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src={n9} alt="" className="siImg" />
    <div className="siDesc">
<h1 className="siTitle">Tower Street Apartment</h1>
<span className='siDistance'>500m from center</span>
<span className="siTaxiOp">Free Airport Taxi</span>
<span className="siSubtitle">Studio Apartment with air conditioning</span>
    <span className="siFeatures">Entire studio * 1 Bathroom *21m.square 1 full bed</span>
    <span className="siCancleOp">Free Cancellation</span>
    <span className="siCancleOpSubtitle">You can cancel later, so lock in this greate price today!</span>
    </div>

    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className='siPrice'> $123 </span>
        <span className='siTaxOp'>Includes Taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
      </div>
    </div>
    
    </div>
  )
}

export default SearchItem
