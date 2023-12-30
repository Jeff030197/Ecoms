import React, { useState } from 'react'
import Email from './Email';
import Phone from './Phone';
import Pass from './Pass';
import ConPass from './ConPass';
import Sub from "./Sub"

function Register() {
    const [account, setAccount] = useState([
        {
            id: 1,
            Email: "",
            PhoneNumber: 0,
            Password: "",
            ConfirmPassword: "",
        }
    ]);

    const [phone, setPhone] = useState();
    

    const handleSubmit = e => {
        e.preventDefault()
        if (phone.length !== 11) return alert("invalid Number")
        console.log(phone)
    }






  return (
    <div className='font-serif py-4'>
        <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-3 gap-2'>
            <div/>
            <div className='border border-black border-solid py-4'>
                <div className='grid grid-cols-2 gap-2'>
                    {/* <Email/> */}
                    <Phone phone={phone} setPhone={setPhone}/>
                </div>
                {/* <Pass/>
                <ConPass/> */}
                <Sub/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Register