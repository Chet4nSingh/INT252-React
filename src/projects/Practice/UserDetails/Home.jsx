import React, { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  async function fetchDetails() {
    setIsLoading(true);
    setDetails([]);
    setError("");

    if (!userId) {
      setError("Please enter a valid user id.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error("User not found.");
      setDetails(data);
      setError("");
    } catch (err) {
      setError(err.message || "User not found.");
    } finally {
      setIsLoading(false);
    }
  }

  console.log(details);

  return (
    
    <main className="w-full h-screen grid place-content-center">
      <div>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="p-4 border border-black"
        />
        <button onClick={fetchDetails} className="p-4 border border-black">
          Get User
        </button>
      </div>
      <div className="text-center">
        {error && <p className="text-2xl font-bold text-red-500">{error}</p>}
        {isLoading && <po>Fetching user data ...</po>}
        {details && (
          <p className="text-2xl font-bold text-green-500">
            {details.name}
          </p>
        )}
      </div>
      </main>
  );
}

export default Home;

// import React, { useState } from "react";
// import axios from "axios";

// function Home() {
//   const [userId, setUserId] = useState("");
//   const [userDetails, setUserDetails] = useState(null);
//   const [error, setError] = useState("");

//   const fetchUser = async () => {
//     if (!userId) {
//       setError("Please enter a User ID.");
//       setUserDetails(null);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//       );
//       setUserDetails(response.data);
//       setError("");
//     } catch (err) {
//       setUserDetails(null);
//       setError("User not found. Please enter a valid User ID.");
//     }
//   };

//   return (
//     <div className="text-center">
//       <input
//         type="text"
//         placeholder="Enter User ID"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//         className="mb-4 w-1/2 mt-8 py-2 pl-4"
//       />
//       <button
//         onClick={fetchUser}
//         className="bg-gray-400 p-2"
//       >
//         Fetch User
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {userDetails && (
//         <div className="w-1/2 mx-auto mt-4 p-4 border border-black rounded">
//           <h2 className="text-xl font-bold">User Details</h2>
//           <p><strong>ID:</strong> {userDetails.id}</p>
//           <p><strong>Name:</strong> {userDetails.name}</p>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//           <p><strong>City:</strong> {userDetails.address.city}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
