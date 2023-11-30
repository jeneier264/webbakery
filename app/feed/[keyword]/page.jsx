"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RecipeCard from "@components/RecipeCard";
import Search from "@components/Search";
import Feed from "@components/Feed";

const FeedPage = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  

  const fetchPosts = async () => {
    setSubmitting(true);

    try {
      const response = await fetch(`/api/recipe/search/${params?.keyword}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <Feed posts={posts} keyword={params?.keyword} submitting={submitting}/>;
};

export default FeedPage;
