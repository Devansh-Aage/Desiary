import React, { useEffect, useState } from 'react';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Wishlist() {
  const [itemText, setItemText] = useState(''); // State for input value
  const [user] = useAuthState(auth); // Get user details
  const [wishlist, setWishlist] = useState([]); // State for storing wishlist items

  // Fetch wishlist items for the logged-in user
  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'wishlist'), where('userID', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const wishlistItems = [];
        querySnapshot.forEach((doc) => {
          wishlistItems.push({ id: doc.id, ...doc.data() });
        });
        setWishlist(wishlistItems);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [user]);

  // Function to handle adding item to Firestore
  const handleAddItem = async () => {
    if (!itemText.trim()) return; // Prevent empty submissions
    try {
      await addDoc(collection(db, 'wishlist'), {
        text: itemText,
        userID: user?.uid,
        timestamp: new Date(),
      });
      setItemText(''); // Clear input after submitting
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  };

  return (
    <div>
      <div className="px-10 flex flex-wrap">
        {/* Input field and submit button */}
        <input
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          placeholder="Add to your wishlist..."
          className="border border-gray-300 rounded-md px-3 py-2 w-1/2 mb-4"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Displaying the list of wishlist items */}
      <div className="px-10">
        <h2 className="text-xl font-bold mb-4">Your Wishlist</h2>
        <ul className="list-disc pl-5">
          {wishlist.map((item) => (
            <li key={item.id} className="mb-2">
              {item.text} <span className="text-gray-500 text-sm">{new Date(item.timestamp.seconds * 1000).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
