import React from 'react';
import project1 from '../Images/project-1.png';
import project2 from '../Images/project-2.png';
import project3 from '../Images/project-3.png';
import './Projects.css'

const Projects = () => {
    return (
        <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <a href="https://corona-virus-supplies.web.app/" target="_blank">
                        <img src={project1} class="card-img-top"  alt="..." /> </a>
                        <div class="card-body">
                            <h5 class="card-title text-center text-success">Corona Virus Medical</h5>
                            <hr />
                            <p class="card-text text-size">This project contains information about vaccination services of corona virus. It's developed based on intermediate level of knowledge using React, React DOM, Firebase, Heruku, Material-UI, Bootstrap, Fontawesome.</p>
                            <div className="d-flex">
                            <a href="https://github.com/KKGHOSE2021/coronaV-medical-supplies-client" target="_blank" class="btn btn-primary d-flex justify-content-center">Client site</a>
                            <a href="https://github.com/KKGHOSE2021/coronaV-medical-supplies-server" target="_blank" class="btn btn-primary d-flex justify-content-center ml-3">Server site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a href="https://cell-phone-shop.firebaseapp.com/" target="_blank">
                        <img src={project2} class="card-img-top" alt="..." /></a>
                        <div class="card-body">
                            <h5 class="card-title text-center text-primary">Cell Phone Shop</h5>
                            <hr />
                            <p class="card-text text-size">This project is build up to sell online different brands of mobile phone. It's developed based on intermediate level of knowledge using React, React DOM, Firebase, Heruku, Material-UI, Bootstrap, Fontawesome. </p>
                            <div className="d-flex">
                            <a href="https://github.com/KKGHOSE2021/phone-shop-client" target="_blank" class="btn btn-primary d-flex justify-content-center">Client site</a>
                            <a href="https://github.com/KKGHOSE2021/phone-shop-server" target="_blank" class="btn btn-primary d-flex justify-content-center ml-3">Server site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a href="https://dhaka-metro-rail-d96e8.web.app/" target="_blank"> 
                        <img src={project3} class="card-img-top" alt="..." /></a>
                        <div class="card-body">
                            <h5 class="card-title text-center text-warning">Dhaka Metro Pass</h5>
                            <hr />
                            <p class="card-text text-size">This project is developed to facilitate four metro rail ticket pass based on different age groups. It's based on intermediate level of knowledge using React, React DOM, Firebase, Bootstrap, Fontawesome.</p>
                            <div className="d-flex">
                            <a href="https://github.com/KKGHOSE2021/dhaka-metro-rail" target="_blank" class="btn btn-primary d-flex justify-content-center">Client site</a>
                            <a href="https://github.com/KKGHOSE2021/dhaka-metro-rail" target="_blank" class="btn btn-primary d-flex justify-content-center ml-3">Server site</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Projects;