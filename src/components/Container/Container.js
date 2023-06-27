import React from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import './container.css'

function Container({children}){

    return(
        <div className="container min-h-screen">
            <Header />
                <div>
                    {children}
                </div>
            <Footer/>
        </div>   

    )
}

export default Container