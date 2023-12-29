import React from 'react'
import { Link } from 'react-router-dom'

function FAQ() {
  return (
    <div className="py-4 flex justify-start">
                   <Link to="/FAQ"><button className="bg-green-600 px-3 rounded-lg hover:bg-blue-200 py-1">
                            FAQ
                        </button></Link>
                    </div>
  )
}

export default FAQ