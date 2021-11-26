import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('https://stormy-brushlands-66654.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div>
                <h1>Our Services</h1>
            </div>
                 <div>
   <Row xs={1} md={3} className="gaps">
     {
       services.map(service => <HomeServices
       key={service.id}
       service={service}>

       </HomeServices>)
     }
     </Row>
   </div>
        </div>
    );
};

export default Services;