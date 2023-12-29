import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
    <Link to="Login"><button className="bg-green-600 px-3 rounded-lg hover:bg-blue-200 py-2">
            Login
        </button></Link>    
    );
}

export default Login;
