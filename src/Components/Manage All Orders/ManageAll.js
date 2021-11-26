import React, { useEffect, useState } from 'react';

const ManageAll = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-brushlands-66654.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // manage DELETE
    const handleDelete = id => {
        fetch(`https://stormy-brushlands-66654.herokuapp.com/books/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.confirm("Are You sure, You want to delete")
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    alert('Deleted Successfully');
                }
            })
    }
    return (
        <div className="manage_services_container">
            <h1 className="text-center text-danger mb-5">Manage All services</h1>
            <div className="service-container">
                {
                    services.map(service => <div className="single-service">
                            {/* <div className="service-img">
                                <img src={service.image} alt="" />
                            </div> */}
                            <div className="service-info">
                                <h4>{service.name}</h4>
                                <h4>Your Name: {service.user}</h4>
                                <h4>
                                    <span>Your Phone:</span> {service.phone}
                                </h4>
                                <h4>
                                    <span>Email:</span> {service.email}
                                </h4>
                                {/* <p>{service.description}</p> */}
                
                                <div className="mb-3 d-flex justify-content-evenly" style={{ textAlign: "center" }}>
                                    <button className="btn btn-warning">Pending</button>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageAll;