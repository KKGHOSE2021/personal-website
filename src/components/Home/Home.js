import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlogger} from '@fortawesome/free-brands-svg-icons';
import { faHome, faAddressCard, faListAlt, faUserPlus, faTasks, faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import WhoAmI from '../WhoAmI/WhoAmI';

const Home = () => {
    const [showResults, setShowResults] = useState("first")
    return (
        <div class="container">
            <div className="row">
                <div id="list-example" class="col-3 bg-info p-3 list-group">
                <a onClick={()=>setShowResults("first")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-1"><FontAwesomeIcon icon={faListAlt} /> Home</a>
                    <a onClick={()=>setShowResults("second")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-2"><FontAwesomeIcon icon={faTasks} /> Projects</a>
                    <a onClick={()=>setShowResults("third")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-3"><FontAwesomeIcon icon={faBlogger} /> Blogs</a>
                    <a onClick={()=>setShowResults("fourth")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-4"><FontAwesomeIcon icon={faUserPlus} /> About</a>
                    <a onClick={()=>setShowResults("five")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-5"><FontAwesomeIcon icon={faAddressCard} /> Contact</a>
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
                </div>

                <div className="col-9 bg-light"> 
                    { showResults === "first" && <WhoAmI/> }
                    { showResults === "second" && <Projects/> }
                    { showResults === "third" && <Blogs/> }
                    { showResults === "fourth" && <AboutMe/> }
                    { showResults === "five" && <ContactMe/> }
                </div>
            </div>
        </div>
    );
};

export default Home;