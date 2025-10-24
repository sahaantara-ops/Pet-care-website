import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({Service}) => {
    const {serviceId, image, serviceName, price, rating} = Service;
    console.log(Service);
    return (
        
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure>
        <img src={image} alt={serviceName} className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p className="text-gray-500">⭐ Rating: {rating}</p>
        <p className="font-semibold text-primary">💰 Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${serviceId}`} className="btn btn-primary btn-sm text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  
       
    );
};

export default ServiceCard;