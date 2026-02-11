import React, { Suspense,  } from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { useLoaderData } from 'react-router';


const Services = () => {
  const servicesData = useLoaderData();
  
  return (
     
     <section className="py-16 bg-[#f8f4e1]">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
        Popular Winter Care Services ❄️
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10">
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          {servicesData.map((service) => 
          <ServiceCard key={Services.serviceId} service={service} />

        )} 
        </Suspense>
      </div>
    </section>
  );
};
  

export default Services;