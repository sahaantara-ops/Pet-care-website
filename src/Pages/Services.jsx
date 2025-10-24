import React, { useState } from 'react';
import { useEffect, } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [service, setServices] = useState([]);
  


  useEffect(() => {
    
    fetch("/data/services.json")

      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);
  console.log(service);
  return (
     
     <section className="py-16 bg-[#f8f4e1]">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
        Popular Winter Care Services ❄️
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10">
        {service.map((service) => (
          <ServiceCard key={Services.serviceId} service={service} />

        ))}
      </div>
    </section>
  );
};
  

export default Services;