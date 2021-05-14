import React from 'react';
import './WhoAmI.css'
import responsive from '../Images/responsive.png';
import crud from '../Images/crud.png';
import mern from '../Images/mern.jpeg';

const WhoAmI = () => {
    return (
        <div class="container mt-5 text-center">
            <h2 className="mb-3 text-info">React Front-end Developer</h2>
            <hr />
            <p className="text-secondary">Hi. I'm <span className="text-info font-weight-bold">Satya Ranjan</span>, a react-based front-end developer with experience creating successful <span className="text-warning font-weight-bold">RESPONSIVE WEBSITES</span> using <span className="text-success font-weight-bold">MERN</span> technology by implementing <span className="text-primary font-weight-bold">CRUD</span> architectural style, that are fast, easy to use.</p>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                <div class="col">
                    <div class="card h-100">
                        <img src={responsive} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Responsive Design</h5>
                            <hr/>
                            <p class="card-text text-size">Responsive websites built for an optimal user experience that achieves your criteria and business goals.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={mern} class="card-img-top" alt="..." />                        
                        <div class="card-body">
                            <h5 class="card-title">MERN Technology</h5>
                            <hr/>
                            <p class="card-text text-size">MongoDB, Express JS, React JS and Node JS implemented to develop high quality web applications.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={crud} class="card-img-top" alt="..." />                                          
                        <div class="card-body">
                            <h5 class="card-title">CRUD Architecture</h5> 
                            <hr/>                           
                            <p class="card-text text-size">Mapping CRUD principles allowing you to easily add/create, retrieve/search, update and delete entries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;