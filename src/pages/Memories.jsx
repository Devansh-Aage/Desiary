import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { auth, db, storage } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Memories() {
  const [imageFile, setImageFile] = useState(null); // State for the selected image file
  const [user] = useAuthState(auth); // Get user details
  const [memories, setMemories] = useState([]); // State for storing memory images

  // Fetch memories for the logged-in user
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(collection(db, "memories"), (querySnapshot) => {
        const memoriesList = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Check if the document has an image URL
          if (data.userID === user.uid && data.imageUrl) {
            memoriesList.push({ id: doc.id, ...data });
          }
        });
        setMemories(memoriesList);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [user]);

  // Function to handle adding memory with image upload to Firestore
  const handleAddMemory = async () => {
    if (!imageFile) return; // Prevent empty submissions
    try {
      // Create a storage reference
      const storageRef = ref(storage, `memories/${user.uid}/${imageFile.name}`);

      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, imageFile);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Add the memory to Firestore with the image URL
      await addDoc(collection(db, "memories"), {
        imageUrl: downloadURL,
        userID: user?.uid,
        timestamp: new Date(),
      });

      setImageFile(null); // Clear the selected file after submitting
    } catch (error) {
      console.error("Error adding memory:", error);
    }
  };

  return (
    <>
      <div className="px-10 flex flex-wrap">
        {/* File input for image uploads */}
        <input
          type="file"
          accept="image/*" // Allow only image files
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border border-gray-300 rounded-md px-3 py-2 w-1/2 mb-4"
        />
        <button
          onClick={handleAddMemory}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </div>

      {/* Displaying the list of memories */}
      <div className="px-10">
        <h2 className="text-xl font-bold mb-4">Your Memories</h2>
        <ul className="list-disc pl-5">
          {memories.map((memory) => (
            <li key={memory.id} className="mb-2">
              {/* Display the image if it exists */}
              {memory.imageUrl && (
                <img
                  src={memory.imageUrl}
                  alt="Memory"
                  className="w-64 h-64 object-cover mb-2"
                />
              )}
              <span className="text-gray-500 text-sm">
                {new Date(memory.timestamp.seconds * 1000).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed size-16 bg-[#FF69AA] z-10 rounded-full flex items-center justify-center bottom-10 right-10 cursor-pointer shadow-2xl hover:-translate-y-2 duration-300">
        <img src="/upload.png" alt="add" className="size-8" />
      </div>
    </>
  );
}

export default Memories;
