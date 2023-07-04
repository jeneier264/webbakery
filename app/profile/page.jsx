"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const profilePic = session?.user.image.replace("s96-c", "s384-c", true);
  const [myPosts, setMyPosts] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [product, setProduct] = useState();

  const updateList = async () => {
    if (product === "undefined" || product.name === null)
      return alert("Missing Product!");

    try {
      const response = await fetch(`/api/users/${session?.user.id}/list`, {
        method: "PATCH",
        body: JSON.stringify({
          item: product,
        }),
      });
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
  
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const recipes = await response.json();

      setMyPosts(recipes);
    };
    const fetchShoplist = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/list`);
      const list = await response.json();

      setShopList(list);
    };
    if (session?.user.id) {
      fetchPosts();
      fetchShoplist();
    }
  }, [session?.user.id]);



  useEffect(() => {
    if(product) updateList();
  
  }, [product])
  

  return (
    <Profile
      profilePic={profilePic}
      name={session?.user.name}
      recipes={myPosts}
      shopList={shopList}
      isMyProfile
      setProduct={setProduct}
    />
  );
};

export default MyProfile;
