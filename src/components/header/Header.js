import React from "react";
import "./Header.css"

export const Header = () =>{
    return(
        <div className="header-wrapper"> 
                <div className="header-content-left">MNTN</div>
                <div className="header-content-center">
                    <div className="header-center-container">

                        <div>Equipment</div>
                        <div>About us</div>
                        <div> Blog</div>
                    </div>
                </div>
                <div className="header-content-right">right</div>
        </div>
    )
}