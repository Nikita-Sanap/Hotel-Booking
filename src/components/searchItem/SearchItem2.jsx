import React from 'react'
import './SearchItem.css'
import n9 from '../../components/images/h8.jpg'
const SearchItem2 = () => {
  return (
    <div className='searchItem'>
      <img src={n9} alt="" className="siImg" />
    <div className="siDesc">
<h1 className="siTitle">Nirvana Hill Resort</h1>
{/* <span className='siDistance'>500m from center</span> */}
<span className="siTaxiOp">Free Airport Taxi</span>
<span className="siSubtitle">Lake view cozy cottage</span>
    <span className="siFeatures">* 1 Bathroom *16 m.square 1 full bed</span>
    <span className="siCancleOp">Free Cancellation</span>
    <span className="siCancleOpSubtitle">You can cancel later, so lock in this greate price today!</span>
    </div>

    <div className="siDetails">
      <div className="siRating">
        <span>Superb</span>
        <button>9.1</button>
      </div>
      <div className="siDetailTexts">
        <span className='siPrice'> Rs.22,500 </span>
        <span className='siTaxOp'>Includes Taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
      </div>
    </div>
    
    </div>
  )
}

export default SearchItem2
