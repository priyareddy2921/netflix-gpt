import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" alt="netflix logo" src={LOGO}></img>
      {user && (
        <div className="flex p-2">
          <button
            onClick={handleGPTSearchClick}
            className="p-4 mx-4 bg-purple-600 text-white rounded-lg"
          >
            {showGPTSearch ? "HomePage" : "GPTSearch"}
          </button>
          <img className="w-12 h-12" src={USER_ICON} alt="userIcon"></img>
          <button onClick={handleSignOut} className="font-bold text-white">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
