"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";


const MyProfile = () => {
  const { data: session } = useSession();
  const profilePic = session?.user.image.replace("s96-c", "s384-c", true);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) {
      fetchPosts();
    }
    // else {router.push('/login');}
  }, [session?.user.id]);


  return (
    <Profile profilePic={profilePic} name={session?.user.name} recipes={myPosts} isMyProfile/>
  );
};

export default MyProfile;
