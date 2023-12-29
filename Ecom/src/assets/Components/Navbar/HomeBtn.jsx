import React from "react";
import { Link } from "react-router-dom";

function HomeBtn() {
    return (
        <div className="py-4">
            <Link to="/">
                {" "}
                <button className="bg-green-600 px-2 rounded-lg hover:bg-blue-200 py-2">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default HomeBtn;
