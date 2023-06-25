import React from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import './container.css'

function Container({childern}){

    return(
        <div className="container">
            <Header />
            {childern}
            <Footer/>
        </div>
        

    )
}

export default Container