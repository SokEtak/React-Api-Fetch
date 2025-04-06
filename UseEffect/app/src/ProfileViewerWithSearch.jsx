import { useEffect, useState } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";

const BASE_URL = "https://api.github.com/users"; // Corrected GitHub API base URL

export default function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("tak");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(() => {
    // This function will fetch the user profile when the username changes
    async function fetchUser() {
      try {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      } catch (error) {
        setProfile({ data: null, isLoading: false });
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, [username]); // Dependency array ensures this effect runs whenever `username` changes

  const search = (newUsername) => {
    setProfile({ data: null, isLoading: true }); // Set loading to true before new fetch
    setUsername(newUsername); // Update the username to trigger the effect
  };

  // Conditional rendering while loading
  if (profile.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ProfileSearchForm search={search} />
      {profile.data ? (
        <>
          <b>{profile.data.name}</b>
          <img src={profile.data.avatar_url} alt={`${profile.data.name}'s avatar`} />
          <h1>{profile.data.login}</h1> {/* Display the username */}
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
