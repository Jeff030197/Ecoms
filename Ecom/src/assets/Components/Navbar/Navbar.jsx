import React from "react";
import Logo from "./Assets/Shopi.png";
import HomeBtn from "./HomeBtn";
import SaleBtn from "./SaleBtn";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import FAQ from "./FAQ";
import Cart from "./Cart";
import Login from "./Login";
import FlashSale from "./FlashSale";
function Navbar() {
    return (
        <div className="grid grid-cols-3 gap-4 py-2 bg-blue-400 font-serif bg">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img src={Logo} alt="Logo" className="h-16 w-20" />
                </div>
                <HomeBtn />
                <SaleBtn />
            </div>

            <div className="grid grid-flow-col-dense gap-1 py-2">
                <SearchBox />
                <div className="mt-2">
                    <SearchIcon />
                </div>
                <div>
                <FAQ />
                </div>
                
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 mt-2 ">
                    <div className="flex justify-center"><FlashSale/></div>

                </div>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex justify-center"><Cart /></div>
                    <div className="flex justify-start"><Login /></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
