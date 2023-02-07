import React from "react";

import Header from "../components/header";
import Body from "./components/body";
import Footer from "../components/footer";

const Landing = () => {

    return (
        <div className="container-fluid"> 
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Landing