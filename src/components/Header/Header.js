import React from 'react';
import {Link} from "react-router-dom";
import header from '../Images/header-background.jpg';
import './Header.css'

const Header = () => {
    return (
        <div class="container mt-5">         
            <img className="img-size" src={header} alt="" />
            <div className="col text-block">
            <h3>Satya Ranjan</h3>
            </div>
        </div>

        
    );
};

export default Header;