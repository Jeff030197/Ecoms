import React from 'react'
import Paypal from "./Assets/Paypal.svg"
import Gcash from "./Assets/Gcash.svg"
import Gc from "./Assets/GC.svg"
import Master from "./Assets/Master.svg"


function PoweredBy() {
  return (
    <>
        <div className="text-center text-2xl">
                        <p>Powered by</p>
                    </div>
                    <div className="py-2 text-center px-4">
                      <div className="grid grid-cols-4 gap-2">
                        <div><img src={Paypal} className="h-20"/></div>
                        <div><img src={Gc} className="h-20"/></div>
                        <div><img src={Gcash} className="h-20"/></div>
                        <div><img src={Master} className="h-20"/></div>
                    
                    </div>
                    </div>
    </>
  )
}

export default PoweredBy