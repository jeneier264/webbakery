"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateRecipe = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    recipe: "",
    tag: "",
    steps: "",
    time: 0,
    servings: 0,
    products: [],
    equipment: [],
    picture: "",
  });

  const createRecipe = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      var imgUrl = "";
      const cloudData = new FormData();

      cloudData.append("file", post.picture);
      cloudData.append("upload_preset", "webbakery");
      cloudData.append("cloud_name", "dpclhozin");

      await fetch(" https://api.cloudinary.com/v1_1/dpclhozin/image/upload", {
        method: "post",
        body: cloudData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          imgUrl = data.url;
        })
        .catch((err) => console.log(err));

      const response = await fetch("/api/recipe/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          userName: session?.user.name,
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
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createRecipe}
    />
  );
};

export default CreateRecipe;
