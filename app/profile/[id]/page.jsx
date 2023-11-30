"use client";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [user, setUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const fecthUser = async () => {
      const response = await fetch(`/api/users/${params?.id}`);
      const data = await response.json();
      setProfilePic(data.image);
      setUser(data);
    };

    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) {
      fecthUser();
      fetchPosts();
    }
  }, [params.id]);

  return (
  <Profile profilePic={profilePic} name={user?.username} recipes={userPosts}/>
  );
};

export default UserProfile;
