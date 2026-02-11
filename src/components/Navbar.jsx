
import { Link, NavLink } from "react-router";
// import logo from "../assets/img/firebase-logo.png";
import MyContainer from "../components/MyContainer/MyContainer";

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
// import MyLink from "./MyLink";

const Navbar = () => {
  // const result = useContext(AuthContext);
  const { user, signoutUserFunc, setUser, loading } =
    use(AuthContext);
  console.log(user);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(loading);

  return (
    <div className="bg-slate-100f py-2 border-b bg-[#cab964] ">
      <MyContainer className="flex items-center justify-between">
        {/* <figure>
          <img src={logo} className="w-[55px]" />
        </figure> */}
        <ul className="flex items-center ml-140  gap-10">
          <li>
            <Link to ='/'>Home</Link>
          </li>
          
          {user && (
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          )}
        </ul>

        {loading ? (
          <ClockLoader color="#e74c3c" />
        ) : user ? (
          <div className="text-center space-y-3">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "https://i.pinimg.com/1200x/cc/1f/f0/cc1ff054826d3427ff522ba3bbf3f518.jpg"}
                className="h-[50px] w-[50px] rounded-full mx-auto"
                alt=""
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-white/80">{user?.email}</p>
              <button onClick={handleSignout} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/auth/signIn"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
