import React from 'react';
import header from '../Images/react-frontend.svg';
import './Header.css'

const Header = () => {
    return (
        <div class="container header-size my-3 bg-info rounded">
            <img className="img-size" src={header} alt="" srcset="" />         
            {/* <img className="img-size" src={header} alt="" />
            <div className="col text-block">
                <h3>Satya Ranjan</h3>
            </div> */}
        </div>

        
    );
};

export default Header;