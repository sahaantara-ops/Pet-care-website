import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public.json")
      .then((res) => res.json())
      .then((data) => {
        const foundService = data.find(
          (item) => item.serviceId === Number(id)
        );
        setService(foundService);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!service)
    return (
      <p className="text-center mt-10 text-red-500">
        Service not found!
      </p>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Service Card */}
      <div className="card bg-base-200 shadow-lg mb-6">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">
            {service.serviceName}
          </h2>

          <p className="text-gray-700 mt-2">
            <strong>Provider:</strong> {service.providerName}
          </p>

          <p className="text-xl font-semibold mt-2">
            Price: ${service.price}
          </p>

          {service.rating && (
            <p className="mt-2">⭐ Rating: {service.rating}</p>
          )}

          {service.description && (
            <p className="mt-4 text-gray-600">
              {service.description}
            </p>
            
          )}
        </div>
      </div>

      {/* Booking Form */}
      <div className="card bg-base-200 shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">
          Book Service
        </h3>

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

          <button type="submit" className="btn btn-primary w-full">
            Book Now
          </button>
        </form>
      </div>

    </div>
  );
};

export default ServiceDetails;
