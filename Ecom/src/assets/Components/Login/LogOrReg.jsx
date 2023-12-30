import React from 'react'
import { Link } from 'react-router-dom'

function LogOrReg() {
  return (
    <header className="text-center mb-4 text-2xl">
    Log in or
    <span className="ml-1 text-blue-600">
      <Link to="/Register">
      Register
      </Link>
      
      </span>
</header>
  )
}

export default LogOrReg