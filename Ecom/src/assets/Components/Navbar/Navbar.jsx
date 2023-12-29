import React from 'react'

function Navbar() {
  return (
    <div className='grid grid-cols-3 gap-4 py-2 bg-gray-400'>
            <div>
                <img src='' alt='Logo'/>
            </div>
            <div className='grid grid-flow-col-dense'>
              <div>
                     <input 
               type='search'
               className='border text-center w-full border-y-neutral-700 border-collapse border-solid h-7'
               placeholder='Search...'
              />
              </div>
              <div>
<button className=' hover:bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="Blue" class="w-7 h-7 align-middle">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>      
              </div>
          
  
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex justify-end'>
                    <button className='hover:bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button>
                </div>
                <div className='flex justify-center'>
                    < button className='bg-blue-600 py-1 px-3 rounded-lg hover:bg-blue-200'>Login</button>
                </div>

            </div>
            
            
    </div>
  )
}

export default Navbar