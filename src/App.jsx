import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import './components/index.css'; // Global styles

const App = () => {
    return (
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
};

export default App;