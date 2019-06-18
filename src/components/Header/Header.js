import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
    <ul className="Header">
        <li className="HeaderItem">
        <Link to="/" className="Link">Home</Link>
        </li>
        <li className="HeaderItem">
        <Link to="/products" className="Link">Products</Link>
        </li>
        <li className="HeaderItem">
        <Link to="/orders" className="Link">Orders</Link>
        </li>
    </ul>
)

export default Header