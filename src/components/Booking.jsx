import React, { useState } from "react";
 
const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        package: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking submitted! We will contact you soon.");
    };

    return (
        <div className="booking">
            <h1>Book a Photoshoot</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Package:
                    <select name="package" value={formData.package} onChange={handleChange} required>
                        <option value="">Select a package</option>
                        <option value="wedding">Wedding</option>
                        <option value="portrait">Portrait</option>
                        <option value="event">Event</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Booking;