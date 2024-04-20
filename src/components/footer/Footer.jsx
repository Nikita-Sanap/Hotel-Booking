import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='fLists'>
        <ul className='fList'>
            <li className='fListItem'>Countries</li>
            <li className='fListItem'>Regions</li>
            <li className='fListItem'>Cities</li>
            <li className='fListItem'>Districts</li>
            <li className='fListItem'>Airports</li>
            <li className='fListItem'>Hotels</li>
       </ul>

       <ul className='fList'>
            <li className='fListItem'>Homes</li>
            <li className='fListItem'>Apartments</li>
            <li className='fListItem'>Resorts</li>
            <li className='fListItem'>Villas</li>
            <li className='fListItem'>Guest house</li>
            {/* <li className='fListItem'>Hotels</li> */}
       </ul>

       <ul className='fList'>
            <li className='fListItem'>Unique Place</li>
            <li className='fListItem'>All destination</li>
            <li className='fListItem'>Seasonal deals</li>
            <li className='fListItem'>Traveller revieiew awards</li>
            {/* <li className='fListItem'>Airports</li> */}
            {/* <li className='fListItem'>Hotels</li> */}
       </ul>

       <ul className='fList'>
            <li className='fListItem'>All flight destination</li>
            <li className='fListItem'>All car higher locations</li>
            <li className='fListItem'>All holiday destination</li>
            {/* <li className='fListItem'>Distri</li> */}
            {/* <li className='fListItem'>Airports</li> */}
            {/* <li className='fListItem'>Hotels</li> */}
       </ul>

       <ul className='fList'>
            <li className='fListItem'>Corona virus FAQ</li>
            <li className='fListItem'>About Travel Perk</li>
            {/* <li className='fListItem'>Sustainability</li> */}
            {/* <li className='fListItem'>Investors Relation</li> */}
            <li className='fListItem'>How we work</li>
            <li className='fListItem'>Corporate conatct</li>
            <li className='fListItem'>Privacy and cookies</li>
            <li className='fListItem'>Terms and conditions</li>

       </ul>

        </div> 

        <div className='fText'>Copyright @ 2024 Lamabooking</div> 
    </div>
  )
}

export default Footer
