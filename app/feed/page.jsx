"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RecipeCard from "@components/RecipeCard";
import Search from "@components/Search";
import Feed from "@components/Feed";


const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/recipe/all");
    const data = await response.json();

    setPosts(data);
  };
  

  useEffect(() => {

    fetchPosts();
  }, []);


  return (
    <Feed posts={posts} keyword={''}/>
  );
};

export default FeedPage;
