import './FeatureProperties.css'
import n9 from '../../components/images/HI.jpg'
import n10 from '../../components/images/HI2.jpg'
import n11 from '../../components/images/HI3.jpg'
import n12 from '../../components/images/HI4.jpg'


const FeaturedProperties = () => {
  return (
    <div className='fp' >

<div className="fpItem">
<img src={n9} alt="" className="fpImg" />
<span className='fpName'>ApartHotel Stare Miasto</span>
{/* <span className='fpCity'>Madrid</span> */}
<span className='fpPrice'>Starting from Rs.9867</span>
<div className='fpRating'>
    <button>8.7</button>
    <span>Fabullus</span>
</div>
</div>

<div className="fpItem">
<img src={n10} alt="" className="fpImg" />
<span className='fpName'>Leman Locke</span>
{/* <span className='fpCity'>Madrid</span> */}
<span className='fpPrice'>Starting from Rs.10650</span>
<div className='fpRating'>
    <button>8.9</button>
    <span>Excellent</span>
</div>

</div>

<div className="fpItem">
<img src={n11} alt="" className="fpImg" />
<span className='fpName'>7Seasons Budapest</span>
{/* <span className='fpCity'>Madrid</span> */}
<span className='fpPrice'>Starting from Rs.12000</span>
<div className='fpRating'>
    <button>9.1</button>
    <span>Superb</span>
</div>

</div>

<div className="fpItem">
<img src={n12} alt="" className="fpImg" />
<span className='fpName'>Orient Palace</span>
{/* <span className='fpCity'>Madrid</span> */}
<span className='fpPrice'>Starting from $15000</span>
<div className='fpRating'>
    <button>9.3</button>
    <span>Marvellous</span>
</div>

</div>



    </div>
  )
}

export default FeaturedProperties
