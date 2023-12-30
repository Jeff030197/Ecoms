import React from "react";
import LogOrReg from "./LogOrReg";
import Email from "./Email";
import Pass from "./Pass";
import Checkbox from "./Checkbox";
import LogBtn from "./LogBtn";

function Login() {
    return (
        <div className="grid grid-cols-3 gap-4 font-serif py-4">
            <div/>
            <form>
                <div className="border border-solid border-black">
                    <div className="py-4">
                        <LogOrReg/>
                        <Email/>
                        <Pass/>
                        <Checkbox/>
                        <LogBtn/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
