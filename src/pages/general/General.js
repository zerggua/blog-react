import React from "react";
import { FrontGenral } from "../../components/frontGeneral/FrontGeneral";
import {  Layout } from "../../components/layout/Layout";

export const General = () =>{
    return(
        <div className="general-wrapper">
            <FrontGenral/>
            <Layout/>
        </div>
    )
}