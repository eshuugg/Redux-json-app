import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const App = () => {
  return (
    <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addUser' element={<AddUser/>}/>
          <Route path='/editUser/:id' element={<EditUser/>}/>


        </Routes>
    </div>
  )
}

export default App;