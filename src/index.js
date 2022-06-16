import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from "./Components/navBar.js"
import Banner from "./Components/banner.js"
import Cars from "./Components/cars.js"
import Card from "./Components/card.js"
import Footer from "./Components/footer.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavBar />
    <Banner/>
    <Cars />
    <Card/>
    <Footer />
    <App />
    
    </>
);
