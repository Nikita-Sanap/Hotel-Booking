import React from 'react'
import './SearchItem.css'
import n9 from '../../components/images/h1.jpg'
const SearchItem4 = () => {
  return (
    <div className='searchItem'>
      <img src={n9} alt="" className="siImg" />
    <div className="siDesc">
<h1 className="siTitle">Sea Sapphire</h1>
{/* <span className='siDistance'>500m from center</span> */}
<span className="siTaxiOp">Free Airport Taxi</span>
<span className="siSubtitle">Deluxe room with balcony</span>
    <span className="siFeatures">Entire studio * 1 Bathroom * 1 extra large double bed</span>
    <span className="siCancleOp">Free Cancellation</span>
    <span className="siCancleOpSubtitle">You can cancel later, so lock in this greate price today!</span>
    </div>

    <div className="siDetails">
      <div className="siRating">
        <span>Marvellous</span>
        <button>9.2</button>
      </div>
      <div className="siDetailTexts">
        <span className='siPrice'>Rs.35,000 </span>
        <span className='siTaxOp'>Includes Taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
      </div>
    </div>
    
    </div>
  )
}

export default SearchItem4
