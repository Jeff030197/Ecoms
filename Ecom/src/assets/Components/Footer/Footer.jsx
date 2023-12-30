import React from "react";
import Logo from "../Navbar/Assets/Shopi.png";

import AboutUs from "./AboutUs";
import PoweredBy from "./PoweredBy";

function Footer() {
    return (
        <div className="absolute bottom-0 left-0 font-serif bg-blue-400">
            <div className="grid grid-cols-3 gap-4 ">
                <AboutUs/>

                <div className=" border-black border-dashed border-r-2">
                    <PoweredBy/>
                </div>

                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="h-40" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
