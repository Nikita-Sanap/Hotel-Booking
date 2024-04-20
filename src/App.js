



import React from 'react'
import{BrowserRouter ,Routes,Route} from 'react-router-dom';

import Home from './pages/home/Home';///here it gives error
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
// import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={< Home />}/>
      <Route path='/hotelInfo' element={< Hotel />}/>
      <Route path='/hotels' element={< List />}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
