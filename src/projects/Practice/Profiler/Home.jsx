import React, { useEffect, useState } from "react";
import Profile from "./Profile";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      setIsLoading(true);
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=10"
      );

      if (!response.ok) {
        //! error
      }

      const data = await response.json();
      setProfiles(data.results);
      setIsLoading(false);
    }

    fetchProfiles();
  }, []);

  return (
    <>
      <header className="text-9xl text-center text-white p-8 bg-sky-400">
        Profiler
      </header>
      {isLoading && (
        <p className="mt-12 text-4xl text-center">FETCHING DATA...</p>
      )}
      {!isLoading && (
        <ul className="flex flex-wrap">
          {profiles.map((profile) => (
            <Profile key={profile.phone} profile={profile} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;
