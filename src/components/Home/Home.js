import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlogger} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faListAlt, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import WhoAmI from '../WhoAmI/WhoAmI';
import Address from '../Address/Address';
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';
import ProjectLanguage from '../ProjectLanguage/ProjectLanguage';
import SoftSkills from '../SoftSkills/SoftSkills';
import BlogSites from '../BlogSites/BlogSites';

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
                    <a onClick={()=>setShowResults("five")} class="list-group-item bg-info list-group-item-action text-white" id="contact" href="#list-item-5"><FontAwesomeIcon icon={faAddressCard} /> Contact</a>
                    { showResults === "first" && <TechnicalSkills />}
                    { showResults === "second" && <ProjectLanguage />}
                    { showResults === "third" && <BlogSites />} 
                    { showResults === "fourth" && <SoftSkills />} 
                    { showResults === "five" && <Address />} 
                </div>

                <div className="col-9 bg-light"> 
                    { showResults === "first" && <WhoAmI/> }
                    { showResults === "second" && <Projects/> }
                    { showResults === "third" && <Blogs/> }
                    { showResults === "fourth" && <AboutMe/> }
                    { showResults === "five" && <ContactMe/>}
                </div>
            </div>
        </div>
    );
};

export default Home;