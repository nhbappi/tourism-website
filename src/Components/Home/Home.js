import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Card, CardGroup, Carousel, Col, Form, Row } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
import Button from '@restart/ui/esm/Button';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('https://stormy-brushlands-66654.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
    }, []);
    return (
      <div>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={'https://images.unsplash.com/photo-1611944596094-70c2dd12e8df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'}
      alt="First slide"/>
    <Carousel.Caption>
      <h3>TourX Travel Agency</h3>
      <p>We provide a best service in your are.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={'https://images.unsplash.com/photo-1609204276470-d22da7d40a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}
      alt="Second slide"/>

    <Carousel.Caption>
      <h3>TourX Travel Agency</h3>
      <p>We provide a best service in your are..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://images.unsplash.com/photo-1503516459261-40c66117780a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'}
      alt="Third slide"/>

    <Carousel.Caption>
      <h3>TourX Travel Agency</h3>
      <p>We provide a best service in your are..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


{/* sercivess */}


<h1 className="mt-5 mb-3 color-match">
      Services
</h1>
   <div>
   <Row  xs={1} md={3} className="gaps">
     {
       services.map(service => <HomeServices
       key={service.id}
       service={service}>

       </HomeServices>)
     }
     </Row>
   </div>




   {/* special some works */}


   <div className="mt-5 mb-3 color-match">
     <h1>Our Some Special Tours</h1>
   </div>
   <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://vietnambestholidays.com/uploads/LJ/Ninh-Binh-Vietnam-classic-tours-1.jpg" />
    <Card.Body>
      <Card.Title><h1>Tour-1</h1></Card.Title>
      <Card.Text>
      At the end of each branch were hundreds of more leaves that would gently catch the morning dew, and carefully allowed it to make its way to the grass. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.solevela.com/wp-content/uploads/2020/12/comino-2.png" />
    <Card.Body>
      <Card.Title><h1>Tour-2</h1></Card.Title>
      <Card.Text>
      They had been in her dreams, and she had never lost' sight of them…woods always stayed the same.” (327). While the woods manage to continually 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.planetware.com/wpimages/2019/10/malaysia-best-places-to-visit-perhentian-islands.jpg" />
    <Card.Body>
      <Card.Title><h1>Tour-3</h1></Card.Title>
      <Card.Text>
      We spent our days together exploring the woods, riding bikes, and catching bugs. Our families were very close and often said that the two of us were like brother and sister
      </Card.Text>
    </Card.Body>
  
  </Card>
</CardGroup>



<div className="d-flex container mt-5 off-part">
<div className="off ">
  <h3>TRAVEL ADVENTURES</h3>
  <h1>25% OFF</h1>
  <h3>SPEND A BEST HOLIDAYS WITH US</h3>
  <button className="bg-warning text-dark fs-5 rounded m-5">BOOK NOW</button>
</div>
<div className="off-photo">
     <img className="" src="http://themescare.com/demos/peulis-v6/assets/img/discount_single.png" alt="" />
</div>
</div>


{/* blog */}
<div className="mb-5">
<div>
  <h1 className="mb-5"> Our Blogs</h1>
</div>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.hindustantimes.com/img/2021/09/03/550x309/3b83168a-0cd3-11ec-9f5a-6ec3df6f49ec_1630686800937.jpg" />
    <Card.Body>
      <Card.Title>Sea Travel</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <div className="btn-blog" >
    <button className="bg-warning text-dark fs-3 rounded m-2">Read More</button>
    </div>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://resources.stuff.co.nz/content/dam/images/4/y/u/6/u/d/image.related.StuffLandscapeSixteenByNine.710x400.231f8v.png/1628709343735.jpg?format=pjpg&optimize=medium" />
    <Card.Body>
      <Card.Title>Mount Travel</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <div className="btn-blog" >
    <button className="bg-warning text-dark fs-3 rounded m-2">Read More</button>
    </div>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.indianexpress.com/2019/07/travelling_759-1.jpg" />
    <Card.Body>
      <Card.Title>Jangle Travel</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <div className="btn-blog" >
    <button className="bg-warning text-dark fs-2 rounded m-2">Read More</button>
    </div>
    
  </Card>
</CardGroup>
</div>

      </div>

    );




};

export default Home;