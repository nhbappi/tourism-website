import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Guide = (props) => {
    const {name, title, about, email, image } = props.guide;
    return (
        <div>
            <Col className="gap">
            <Card className="courseCard" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    {/* <Card.Title>{title}</Card.Title> */}
                    <Card.Title>{about}</Card.Title>
                    <Card.Title><h3>Email:{email}</h3></Card.Title>

                </Card.Body>

            </Card>
            </Col>
        </div>
    );
};

export default Guide;