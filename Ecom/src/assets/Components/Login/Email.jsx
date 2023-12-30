import React from 'react'

function Email() {
  return (
    <div className="flex justify-center">
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-80 h-8 border border-black border-solid text-center"
                            />
                        </div>
  )
}

export default Email