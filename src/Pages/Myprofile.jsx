import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext); // auth needed for updateProfile
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
       navigate("/"); 

      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center px-4">
      <div className="bg-amber-100 shadow-lg rounded-2xl w-full max-w-md p-6">
        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://i.pinimg.com/1200x/cc/1f/f0/cc1ff054826d3427ff522ba3bbf3f518.jpg"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>
        </div>

        {/* Toggle Edit Mode */}
        {!editMode ? (
          <div className="mt-6">
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition duration-300"
            >
              Update Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Display Name"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
