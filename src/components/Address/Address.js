import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
    return (
        <div className="text-white mt-3 p-3">
            <hr />
            <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: </h6>
            <small>6 Carlow Way, Maitland 2233, Australia</small>
            <hr />                        
            <h6><FontAwesomeIcon icon={faEnvelope} /> Email:</h6>
            <small>satya.ranjan.au@gmail.com</small>
            <hr />
            <h6><FontAwesomeIcon icon={faMobileAlt} /> Phone: </h6>
            <small>+61470643787</small>
        </div>
    );
};

export default Address;