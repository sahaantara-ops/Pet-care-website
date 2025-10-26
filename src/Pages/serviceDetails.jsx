// ServiceDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId === parseInt(id));
        setService(found);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };
  

  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-10 bg-[#fff6e9] min-h-screen">
      <div className="card lg:card-side bg-white shadow-xl p-5">
        <figure><img src={service.image} alt={service.serviceName} className="rounded-lg" /></figure>
        <div className="card-body">
          <h2 className="card-title text-blue-900">{service.serviceName}</h2>
          <p>{service.description}</p>
          <p>⭐ {service.rating}</p>
          <p className="font-bold text-amber-500">${service.price}</p>

          <form onSubmit={handleSubmit} className="mt-4">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-2" required />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-2" required />
            <button className="btn btn-primary w-full">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
