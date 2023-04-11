import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
       <h1>Welcome to typescript & React</h1>
       <p>This website is for getting used to TypeScript & React. Please visit <Link to="https://github.com/Jonghan-park/ty_react_hooks" target='_blank'><span className='highlight'>My gitHub </span></Link> to see detailed code that I used. </p>
    </div>
  )
}

export default Home