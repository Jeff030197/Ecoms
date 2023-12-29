import React from "react";
import Logo from "./Assets/Shopi.png";
import HomeBtn from "./HomeBtn";
import SaleBtn from "./SaleBtn";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import FAQ from "./FAQ";
import Cart from "./Cart";
import Login from "./Login";
function Navbar() {
    return (
        <div className="grid grid-cols-3 gap-4 py-2 bg-blue-400 font-serif">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img src={Logo} alt="Logo" className="h-16 w-20" />
                </div>
                <HomeBtn />
                <SaleBtn />
            </div>

            <div className="grid grid-flow-col-dense gap-1">
                <SearchBox />
                <div className="mt-2">
                    <SearchIcon />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2">
                    <FAQ />
                    <div className="py-2 flex justify-end">
                        <Cart />
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
