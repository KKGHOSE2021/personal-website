import React from 'react';
import img from '../Images/satya.jpg';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div class="container my-5">         
            <h2 className="mb-3 text-info text-center">About Satya Ranjan</h2>           
            <div className="row d-flex justify-content-between">
            <a type="button" href="https://drive.google.com/file/d/1O4H1oES5VEDSazXr7NzpTe1Uv_L9ewf7/view?usp=sharing" class="btn btn-info float-right" target="_blank" class="btn btn-info float-left">ONLINE CV</a>
            <a type="button" href="https://drive.google.com/uc?export=download&id=1O4H1oES5VEDSazXr7NzpTe1Uv_L9ewf7" class="btn btn-info float-right">DOWNLOAD RESUME</a>
        </div>           
            
            <hr className="mb-4"/>
            <div className="row d-inline">
                <img  className="float-left mr-5" src={img} alt=""/>
                <p className="text-size mb-5float-right">I am Front-end Developer wit experience in developing commercial websites using MERN Technologies. I have completed my graduation in Mathematics and grew strong interest in developing websites, which motivated me to join the "Web-development courses" offered by Programming Hero. </p>
                <p className="text-size mb-5">I developed my skills in Frontend technologies such as React JS, Redux, ES6, Vanilla JavaScript, Bootstrap, Material-UI, Firebase, Netlifly, CSS and HTML. I also have gained experience in Backend technologies such as MongoDB, MySQL, Node JS, Heroku. I extensively use Visual Studio and Git platform for web development.</p>
                <p className="text-size mb-5">My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.</p>
                <p className="text-size mb-5">I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.</p>
                <p className="text-size">My clients have found that hiring me has saved them time and money, made it easier to grow their website alongside their business, and made for a product that is consistently of high quality.</p>
            </div>
        </div>
    );
};

export default AboutMe;