import { useState } from 'react'
import Home from '/src/pages/home/Home'; 
import List from '/src/pages/list/List';
import Hotel from '../src/pages/hotel/Hotel';
import './index.css'



import {
      BrowserRouter, 
      Routes,
      Route,
} from  "react-router-dom";
import './App.css'

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/hotels" element={<List></List>}/>
          <Route path="/hotels/:id" element={<Hotel></Hotel>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App
