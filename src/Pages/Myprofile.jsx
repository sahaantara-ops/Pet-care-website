import { AuthContext} from "../Context/AuthContext";
import { useContext } from "react";


const MyProfile = () => {
  
  const {user} = useContext(AuthContext);
  console.log(user)

  return (
    
    <div className="min-h-screen bg-amber-200 flex items-center justify-center px-4">
      
      <div className="bg-amber-200 shadow-lg rounded-2xl w-full max-w-md p-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
           {user?.displayName}
          </h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>
        </div>

        {/* Update Button */}
        <div className="mt-6">
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
