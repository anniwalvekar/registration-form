import React from 'react';
import './Styel.css';
import Homepage from './homepage/Homepage';
import Login from './login/Login';
import Register from './register/Register';
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className='App'>
    <Router>
    <Routes>
    <Route exact path="/" element={ user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} /> }/>
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
    </Router>
     {/* <Homepage />
     <Login />
     <Register /> */}
    </div>
  )
}

export default App;