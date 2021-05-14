import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    return (
        <div className="text-white mt-3 p-3">
            <h5 className=""> Technical skills</h5>
            <hr />
            <h6 className="a">FRONTEND</h6>            
            <ul class="a">
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>ES6</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>Firebase</li>
            <li>Netlify</li>
            <li>CSS</li>
            <li>HTML</li>
            </ul>
            <hr />
            <h6>BACKEND</h6>
            <ul class="a">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Heroku</li>
            </ul>
            <hr />
            <h6>FRAMEWORK</h6>
            <ul class="a">
            <li>VS Code</li>
            <li>Git</li>
            </ul>
        </div>
    );
};

export default TechnicalSkills;