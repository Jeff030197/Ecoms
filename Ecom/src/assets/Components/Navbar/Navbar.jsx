import React from 'react'
import Logo from "./Assets/Shopi.png"
function Navbar() {
  return (
    <div className='grid grid-cols-3 gap-4 py-2 bg-blue-400 font-serif'>
            <div className='grid grid-cols-3 gap-4'>
              <div><img src={Logo} alt='Logo' className='h-16 w-20' /></div>
              <div className='py-4'>
                <button className='bg-green-600 px-3 rounded-lg hover:bg-blue-200 py-2'>Home</button>
              </div>
              <div className='py-4'>
                <button className='bg-green-600 px-3 rounded-lg hover:bg-blue-200 py-2'>Sale</button></div> 
            </div>

            <div className='grid grid-flow-col-dense gap-1'>
              <div className='mt-2'>
                     <input 
               type='search'
               className='border text-center w-full border-y-neutral-700 border-collapse border-solid h-9 py-5'
               placeholder='Search...'
              />
              </div>
              <div className='mt-2'>
<button className=' hover:bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="Blue" class="w-7 h-9 align-middle">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>      
              </div>
          
  
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='grid grid-cols-2'>
                  <div className='py-4 flex justify-start'>
                    <button className='bg-green-600 px-3 rounded-lg hover:bg-blue-200 '>FAQ</button>
                  </div>
                  <div className='py-2 flex justify-end'>
                    <button className='hover:bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button></div>
                    
                </div>
                <div className='flex justify-center py-3'>
                    < button className='bg-green-600 px-3 rounded-lg hover:bg-blue-200'>Login</button>
                </div>

            </div>
            
            
    </div>
  )
}

export default Navbar