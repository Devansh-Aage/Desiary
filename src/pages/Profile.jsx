import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user] = useAuthState(auth); // Get authenticated user
  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data
  const [show, setShow] = useState(false); // State to toggle privacy settings visibility
  const navigate=useNavigate();

  // Fetch user profile from Firestore when the user is authenticated
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid)); // Assuming you have a 'users' collection
          if (userDoc.exists()) {
            console.log(userDoc.data());
            
            setUserProfile(userDoc.data()); // Set user profile data
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, [user]); // Run effect when user changes

  const handleShow = () => {
    setShow(!show);
  };

  const logout=()=>{
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto p-12 flex items-center">
        <div className="flex-1 text-xl font-medium px-20 flex flex-col gap-4 relative">
          {/* Display user profile data */}
          {userProfile ? (
            <>
              <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
                <p>Name: {userProfile.username}</p>
              </div>
              <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
                <p>Email: {userProfile.email}</p>
              </div>
            </>
          ) : (
            <p>Loading profile...</p> // Loading state
          )}
          <button
            className="px-2 py-4 text-start rounded-lg hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md"
            onClick={handleShow}
          >
            Privacy Settings
          </button>
          <div className={`${show ? "block" : "hidden"} absolute -bottom-36`}>
            <div className={`px-2 py-4 text-start rounded-lg bg-[#E5F9F0]`}>
              <p>Public</p>
              <p
                className={` text-sm text-gray-500 ${
                  show ? "block" : "hidden"
                }`}
              >
                Change your privacy setting for other users of the app to see
                your profile in their travel section of not visited places.
              </p>
            </div>
          </div>
          <button onClick={logout} className="bg-red-600 text-white px-3 py-1 rounded-lg cursor-pointer hover:opacity-80 w-32">Logout</button>
        </div>
        <img
          src="/user.png"
          alt="profile"
          className="ml-10 rounded-full size-80"
        />
      </div>
    </div>
  );
}

export default Profile;
