import React from "react";
import Logo from "../Navbar/Assets/Shopi.png";
import Paypal from "./Assets/Paypal.svg"
import Gcash from "./Assets/Gcash.svg"
import Gc from "./Assets/GC.svg"
import Master from "./Assets/Master.svg"

function Footer() {
    return (
        <div className="absolute bottom-0 left-0 font-serif">
            <div className="grid grid-cols-3 gap-20">
                <div className="ml-4">
                    <div className="text-center text-2xl">
                        <p>About Us</p>
                    </div>
                    <div className="py-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus nulla nostrum? Suscipit sapiente quasi nesciunt culpa fugit natus, voluptas, autem magni beatae quo nulla. Quae iste doloribus sunt reprehenderit.</div>
                </div>


                <div className="ml-10">
                    <div className="text-center text-2xl">
                        <p>Powered by</p>
                    </div>
                    <div className="py-2 text-center">
                      <div className="grid grid-cols-4 gap-2">
                        <div><img src={Paypal} className="h-20"/></div>
                        <div><img src={Gc} className="h-20"/></div>
                        <div><img src={Gcash} className="h-20"/></div>
                        <div><img src={Master} className="h-20"/></div>
                    
                    </div>
                    </div>
                </div>



                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="h-40" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
