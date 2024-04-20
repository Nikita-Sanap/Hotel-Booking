import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchItem/SearchItem'
import SearchItem2 from '../../components/searchItem/SearchItem2'
import SearchItem3 from '../../components/searchItem/SearchItem3.jsx'
import SearchItem4 from '../../components/searchItem/SearchItem4'
import SearchItem5 from '../../components/searchItem/SearchItem5'
import SearchItem6 from '../../components/searchItem/SearchItem6'
import './List.css'
import {useLocation} from 'react-router-dom'
import {useState} from'react'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';


const List = () => {


  // my original
  // const location =useLocation();
  // const [destination,setDestination]=useState(location.state.destination)
  // const [date,setDate]=useState(location.state.date)
  // const [openDate,setOpenDate]=useState(false)
  // const [options,setOptions]=useState(location.state.options)


  // chatgpt 
  const location = useLocation();
  const defaultDestination = location.state?.destination || "";
  const defaultDate = location.state?.date || [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }];
  const defaultOptions = location.state?.options || {
    adult: 1,
    children: 0,
    room: 1,
  };

  const [destination, setDestination] = useState(defaultDestination);
  const [date, setDate] = useState(defaultDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

 

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input placeholder= {destination} type="text"  />
            </div>

            <div className="lsItem">
              <label > Check-In Date </label>
              <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, 'MM/dd/yy')} to  ${format(date[0].endDate, 'MM/dd/yy')}`}</span>
            {openDate && (
            <DateRange
             onChange={(item)=>setDate([item.selection])} 
             minDate={new Date()}
              ranges={date}
              />
              )}
            
            </div>

            <div className="lsItem">
           <label >Options</label>
<div className="lsOptions">



           <div className="lsOptionItem">
            <span className="lsOptionText"> Min Price <small>per Night</small></span>
            <input type="number" className="lsOptionInput" />
           </div>

           <div className="lsOptionItem">
            <span className="lsOptionText"> Max Price <small>per Night</small></span>
            <input type="number" className="lsOptionInput" />
           </div>

           <div className="lsOptionItem">
            <span className="lsOptionText"> Adult </span>
            <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
           </div>

           <div className="lsOptionItem">
            <span className="lsOptionText"> Children</span>
            <input type="number" min={0} className="lsOptionInput"  placeholder={options.children}/>
           </div>

           <div className="lsOptionItem">
            <span className="lsOptionText"> Rooms </span>
            <input type="number" min={1} className="lsOptionInput"  placeholder={options.room}/>
           </div>
           </div>
            </div>

            <button>Search</button>
          </div>
        
        <div className="listResult">
          <SearchItem/>
          <SearchItem2/>
          <SearchItem3/>
          <SearchItem4/>
          <SearchItem5/>
          <SearchItem6/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default List
