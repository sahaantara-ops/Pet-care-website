import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`/public/public.json`)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id]);

  if (!service) return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* Service Info */}
      <div className="card bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={service.image} alt={service.serviceName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{service.serviceName}</h2>
          <p>⭐ Rating: {service.rating}</p>
          <p>💰 Price: ${service.price}</p>
          <p>{service.description}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="card bg-base-200 shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Book Service</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <button className="btn btn-primary w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
