import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './HomeServices.css';
import { Link } from 'react-router-dom';
const HomeServices = (props) => {
    const {_id, name, image, Cost, description} = props.service;
    
    return (
        <Col>
        <Card className="courseCard" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title><h1 className="service-name">{name}</h1></Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
                <Card.Text className="courseCard"><h4>Cost: ${Cost}</h4></Card.Text>
            <div className="pb-3">
              <Link to={`/booking/${_id}`}>
              <button className="btn btn-warning">Booking</button>
              </Link>
            </div>
            
        </Card>
        </Col>
    );
};

export default HomeServices;