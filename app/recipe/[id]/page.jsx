"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { setBakeware } from "@app/redux/reducers/sessionSlice";
import Recipe from "@components/Recipe";
import { useRouter } from "next/navigation";
import { CompressOutlined } from "@mui/icons-material";

const RecipePage = ({ params }) => {
  const dispatch = useDispatch();
  const { bakeware } = useSelector((state) => state.session);
  const [post, setPost] = useState();
  const { data: session } = useSession();
  const [isAuthor, setIsAuthor] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/update-recipe?id=${post._id}`);
  };

  const handleDelete = async (hasConfirmed) => {
    // const hasConfirmed = confirm(
    //   "Are you sure you want to delete this prompt?"
    // );

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

  const fetchBakeware = async () => {
    const response = await fetch("/api/bakeware");
    const data = await response.json();

    dispatch(setBakeware(data));
  };

  useEffect(() => {
    if (session && post) {
      if (session?.user.id === post?.creator) setIsAuthor(true);
    }
  }, [session?.user.id, post]);

  useEffect(() => {
    // if(!bakeware.length){
    //   console.log("there was no fetched bakeware");
    //   fetchBakeware();
    // }
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
