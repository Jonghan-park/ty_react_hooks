import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import UseStateComponent from './components/UseStateComponent';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usestate' element={<UseStateComponent />} />
      </Routes>
    </div>
  )
}

export default App
