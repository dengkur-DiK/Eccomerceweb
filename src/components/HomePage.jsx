import React, { useState } from "react";
import './index.css';
import { SearchCards } from "./SearchCards"; // Search functionality
import SearchResultsList from "./SearchResultsList"; // Display search results
import AuthenticateB from "./AuthenticateB"; // Login (optional)
import Gallery from "./Gallery"; // Gallery section
import Booking from "./Booking"; // Booking section
import About from "./About"; // About section
import Contact from "./Contact"; // Contact section

const HomePage = () => {
    const [results, setResults] = useState([]); // State for search results

    return (
        <div className="homepage">
           
            {/* Search Section */}
            <section id="search" className="section">
                <h1>Antbros Photography Studio</h1>
                <div className="search-cards">
                    <SearchCards setResults={setResults} />
                </div>
                <SearchResultsList results={results} />
            </section>

            <section id="description" className="section">
                <p className="description">
                    Welcome to Antbros Photography Studio, your ultimate destination for capturing life's most beautiful moments! <br />
                    🌟 Explore our gallery of stunning photos and videos, featuring breathtaking portraits, creative shots, and unforgettable memories. <br />
                    Book your photoshoot with us today and let our professional team bring your vision to life. From weddings to corporate events, we've got you covered. <br />
                    Experience artistry, elegance, and excellence with Antbros Studio. 📸🎥✨
                </p>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section">
                <h2>Gallery</h2>
                <Gallery />
            </section>

            {/* Booking Section */}
            <section id="booking" className="section">
                <h2>Book a Session</h2>
                <Booking />
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <h2>About Us</h2>
                <About />
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <Contact />
            </section>

            {/* Login / Authentication */}
            <section id="login" className="section">
                <h2>Login</h2>
                <AuthenticateB />
            </section>
        </div>
    );
};

export default HomePage;