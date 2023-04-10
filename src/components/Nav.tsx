import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="title">
      <Link to="/">
        React hooks with TS
      </Link>
      </div>
      <ul>
        <Link to="/usestate">
          <li>useState</li>
        </Link>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useRef</li>
        <li>useCallback</li>
        <li>useMemo</li>
      </ul>
    </nav>
  )
}

export default Nav