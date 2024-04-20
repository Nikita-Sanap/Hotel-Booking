import React from 'react'
import './PropertyList.css';
// import n4 from '../../components/images/h2.jpg'
// import n5 from '../../components/images/h1.jpg'
// import n6 from '../../components/images/h3.jpg'
// import n8 from '../../components/images/h8.jpg'
// import n9 from '../../components/images/h9.jpg'

import n9 from '../../components/images/h9.jpg'

import n5 from '../../components/images/h1.jpg'
import n6 from '../../components/images/h3.jpg'
import n8 from '../../components/images/h8.jpg'
import n4 from '../../components/images/h2.jpg'

const PropertyList = () => {
  return (
    <div className='pList'>

      <div className='pListItem'>
         <img src={n9}  alt="" className="pListImg" />
          <div className="pListTitle">
              <h1>Hotels</h1>
              
          </div>
      </div>

      <div className='pListItem'>
         <img src={n5} alt="" className="pListImg" />
          <div className="pListTitle">
              <h1>Resorts</h1>
              
          </div>
      </div>

      <div className='pListItem'>
         <img src={n6} alt="" className="pListImg" />
          <div className="pListTitle">
              <h1>Villas</h1>
             
          </div>
      </div>

      <div className='pListItem'>
         <img src={n4} alt="" className="pListImg" />
          <div className="pListTitle">
              <h1>Restaurants</h1>
             
          </div>
      </div>

      <div className='pListItem'>
         <img src={n8} alt="" className="pListImg" />
          <div className="pListTitle">
              <h1>Cabins</h1>
             
          </div>
      </div>

    </div>
  )
}

export default PropertyList
