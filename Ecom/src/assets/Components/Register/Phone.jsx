import React from 'react'

function Phone({phone, setPhone}) {
  return (
    <div className='flex justify-center py-2'>
                        <input
                        type='number'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                        className='border border-black border-solid text-center h-8'/>
                        
                    </div>
  )
}

export default Phone