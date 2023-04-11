import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usestate' element={<UseStateComponent />} />
        <Route path='/useeffect' element={<UseEffectComponent />} />
      </Routes>
    </div>
  )
}

export default App
