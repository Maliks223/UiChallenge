import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from "./Components/card/card.js"
import NavBar from "./Components/NavBar/navBar.js"
import Banner from "./Components/Banner/banner.js"
import Cars from "./Components/Car/cars.js"
import Footer from "./Components/Footer/footer.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavBar />
    <Banner/>
    <Cars />
    <Footer />
    </>
);
