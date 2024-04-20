import React from 'react'
import './SearchItem.css'
import n9 from '../../components/images/h10.jpg'
const SearchItem6 = () => {
  return (
    <div className='searchItem'>
      <img src={n9} alt="" className="siImg" />
    <div className="siDesc">
<h1 className="siTitle">Antarim Resort</h1>
{/* <span className='siDistance'>500m from center</span> */}
<span className="siTaxiOp">Free Airport Taxi</span>
<span className="siSubtitle">Junior Suite - King Bed</span>
    <span className="siFeatures">1 double or 2 single beds available</span>
    <span className="siCancleOp">Free Cancellation</span>
    <span className="siCancleOpSubtitle">You can cancel later, so lock in this greate price today!</span>
    </div>

    <div className="siDetails">
      <div className="siRating">
        <span>Best</span>
        <button>9.0</button>
      </div>
      <div className="siDetailTexts">
        <span className='siPrice'> Rs.27,000 </span>
        <span className='siTaxOp'>Includes Taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
      </div>
    </div>
    
    </div>
  )
}

export default SearchItem6
