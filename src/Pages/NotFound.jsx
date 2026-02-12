import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100 items-center justify-center text-center p-6">
      
      <h1 className="text-7xl font-extrabold text-primary">404</h1>
      
      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link to="/">
        <button className="btn btn-primary mt-6 px-6">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;
