import React from "react";
 import { useAuth } from '../Context/AuthContext';
 import toast from "react-hot-toast";



const MyProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return (

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-blue-900">No user logged in</h2>
        <p className="text-gray-600 mt-2">Please log in to view your profile.</p>
      </div>
    );
  }
 console.log (user)
  return (
    <div className="flex flex-col items-center justify-center bg-[#fff6e9] min-h-screen p-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <img
          src={user.photoURL || "https://tse2.mm.bing.net/th/id/OIP.ilyl0uRnuDliNcSxDcnvrAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3"}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-300"
        />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          {user.displayName || "User Name"}
        </h2>
        <p className="text-gray-700 mb-4">{user.email}</p>

        <button
          className="bg-amber-400 text-white px-5 py-2 rounded-full hover:bg-amber-500"
          onClick={() =>  toast . success("Update Profile successfully!")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
