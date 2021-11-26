import Button from '@restart/ui/esm/Button';
import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
             <div className="banner">
        <div className="content">
            <h1>ABOUT US</h1>
            <h4>The Best Travel Agency Company
            </h4>
            <div>
                <button className="button">DOWNLOAD</button>
            </div>
        </div>
    </div>

<div className="row m-5">

    <div className="col-lg-6 col-md-6 col-12">
    <img src={"https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"} className="img-fluid"></img>      
    </div>
    <div className="col-lg-6 col-md-6 col-12">
    <h1>Welcome TourX!</h1>
    <h4>At ourhospital, you’re not just another client and their pet…we understand your pet is like your family,and we’re here to make  sure your family member lives a healthy and happy life.We believe in providing customized treatment plans tailored to the needs of each individual client and patient. Our animal hospital is located in Mocksville,NC and we’re convenient to Davie Rowan Iredell and Forsyth counties.</h4>
    <Button className="btn-grp" variant="secondary" size="lg" active>Read More</Button>
    </div>

</div>
    
        </div>
    );
};

export default About;