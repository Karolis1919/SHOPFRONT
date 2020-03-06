import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import "./app.scss";

function App(){
    return(
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;