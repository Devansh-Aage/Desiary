import React, { useEffect, useState } from 'react';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Travel() {
  const [travelText, setTravelText] = useState(''); // State for input value
  const [user] = useAuthState(auth); // Get user details
  const [travelEntries, setTravelEntries] = useState([]); // State for storing travel entries

  // Fetch travel entries for the logged-in user
  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'travel'), where('userID', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const entriesList = [];
        querySnapshot.forEach((doc) => {
          entriesList.push({ id: doc.id, ...doc.data() });
        });
        setTravelEntries(entriesList);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [user]);

  // Function to handle adding travel entry to Firestore
  const handleAddEntry = async () => {
    if (!travelText.trim()) return; // Prevent empty submissions
    try {
      await addDoc(collection(db, 'travel'), {
        text: travelText,
        userID: user?.uid,
        timestamp: new Date(),
      });
      setTravelText(''); // Clear input after submitting
    } catch (error) {
      console.error('Error adding travel entry:', error);
    }
  };

  return (
    <div>
      <div className="px-10 flex flex-wrap">
        {/* Input field and submit button */}
        <input
          type="text"
          value={travelText}
          onChange={(e) => setTravelText(e.target.value)}
          placeholder="Where do you want to travel?"
          className="border border-gray-300 rounded-md px-3 py-2 w-1/2 mb-4"
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Displaying the list of travel entries */}
      <div className="px-10">
        <h2 className="text-xl font-bold mb-4">Your Travel Entries</h2>
        <ul className="list-disc pl-5">
          {travelEntries.map((entry) => (
            <li key={entry.id} className="mb-2">
              {entry.text} <span className="text-gray-500 text-sm">{new Date(entry.timestamp.seconds * 1000).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Travel;
