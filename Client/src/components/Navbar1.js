import React from "react";

function Navbar(){
    return(
        <div>
            <div className="w-full py-8 my-0 flex flex-row space justify-between bg-red-500">
                <div className="px-6">
                    <h3 className="text-2xl font-bold">Plan With Love</h3>
                </div>
                
                <div className="w-2/12 px-6 flex justify-evenly ">
                    <button className="px-2 rounded-sm bg-white border-2">
                        Sign In
                    </button> 
                    <button>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;