import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const LogIn= () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate(from, { replace: true }); // redirect to previous page
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default LogIn;
