import React from 'react'

function Email() {
  return (
    <div className='flex justify-center py-2'>
    <input
    type='Email'
    required
    placeholder='Email'
    className='h-8 border border-black border-solid text-center'/>
</div>
  )
}

export default Email