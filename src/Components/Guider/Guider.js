import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Guide from '../Guide/Guide';

const Guider = () => {
    const [guider, setGuider] = useState([]);

    useEffect(() => {
        fetch('./guide.json')
        .then(res => res.json())
        .then(data => setGuider(data))

    }, []);
    return (
        <div>
            <h1>
                Our Guiders
            </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    guider.map(guide => <Guide
                        key={guide.id}
                        guide={guide}
                    
                    ></Guide>)
                }
            </Row>
        </div>
    );
};

export default Guider;