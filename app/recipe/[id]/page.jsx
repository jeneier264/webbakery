"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Recipe from "@components/Recipe";
import { useRouter } from "next/navigation";

const RecipePage = ({ params }) => {
  const [post, setPost] = useState();
  const { data: session } = useSession();
  const [isAuthor, setIsAuthor] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/update-recipe?id=${post._id}`);
  };

  const handleDelete = async (hasConfirmed) => {
    if (hasConfirmed) {
      try {
        await fetch(`/api/recipe/${post._id.toString()}`, {
          method: "DELETE",
        });

        router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchPost = async () => {
    const recipeResponse = await fetch(`/api/recipe/${params?.id}`);
    const recipe = await recipeResponse.json();

    setPost(recipe);
  };

  useEffect(() => {
    if (session && post) {
      if (session?.user.id === post?.creator) setIsAuthor(true);
    }
  }, [session?.user.id, post]);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Recipe
      recipe={post}
      isAuthor={isAuthor}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default RecipePage;
