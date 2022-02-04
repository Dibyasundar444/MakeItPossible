import React from 'react';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import Home from './core/Home';
import Queries from './core/Queries';
// import Welcome from './core/Welcome';
import Login from './user/Login';
import Register from './user/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/queries" element={<Queries />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;