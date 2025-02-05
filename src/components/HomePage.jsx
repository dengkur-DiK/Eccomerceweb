import React, { useState } from "react";
import './Index.css';
import { SearchCards } from "./SearchCards";
import SearchResultsList from "./SearchResultsList";
import Navbar from "./Navbar";
import AuthenticateB from "./AuthenticateB";

const HomePage = () => {
    const { results, setResults } = useState([]);
    return (
        <div className="homepage">
            <h1>Kurino Electronics</h1>
            <Navbar />
            <AuthenticateB />
            <SearchCards setResults={setResults} />
            <SearchResultsList result='results' />
            <div>
                <p className="500">Welcome to Kurino Electronics, South Sudan's premier online destination for cutting-edge tech! <br />
                    🌟 Discover a curated collection of phones, laptops, TVs, and more—all at your fingertips. Whether you're a gadget enthusiast or a casual shopper, we've got you covered. <br />
                    Fast shipping, secure payments, and top-notch customer service await you. Dive into the future with Kurino! 🚀📱💻</p>
            </div>
        </div>
    );
};

export default HomePage;
