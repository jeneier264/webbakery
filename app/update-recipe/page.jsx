"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";


const UpdateRecipe = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({});
  const [prevPicture, setPrevPicture] = useState()

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/recipe/${recipeId}`);
      const data = await response.json();
      setPrevPicture(data.picture);
      setPost({
        recipe: data.recipe,
        tag: data.tag,
        steps: data.steps,
        time: data.time,
        servings: data.servings,
        products: data.products,
        equipment: data.equipment,
        picture: data.picture,
      });
    };

    if (recipeId) getPromptDetails();
  }, [recipeId]);

  const updateRecipe = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!recipeId) return alert("Missing RecipeId!");
    try {
      var imgUrl = post.picture.startsWith("data") ? "" : post.picture;
      if (post.picture.startsWith("data")) {
        //await removeFile(post.picture);
        const cloudData = new FormData();
        cloudData.append("file", post.picture);
        cloudData.append("upload_preset", "webbakery");
        cloudData.append("cloud_name", "dpclhozin");

        await fetch(CLOUDINARY_UPLOAD_URL, {
          method: "post",
          body: cloudData,
        })
          .then((resp) => resp.json()) 
          .then((data) => {
            imgUrl = data.url;
          })
          .catch((err) => console.log(err));
      }

      const response = await fetch(`/api/recipe/${recipeId}`, {
        method: "PATCH",
        body: JSON.stringify({
          tag: post.tag,
          recipe: post.recipe,
          steps: post.steps,
          time: post.time,
          servings: post.servings,
          products: post.products,
          equipment: post.equipment,
          picture: imgUrl,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateRecipe}
    />
  );
};

export default UpdateRecipe;
