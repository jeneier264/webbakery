"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ProductCard from "@components/ProductCard";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRouter } from "next/navigation";

/* add search for product
add 'add to list' button 
shopping list
categorize the products*/
const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  const [list, setList] = useState();
  const [product, setProduct] = useState(null);
  const [snackbar, setSnackbar] = useState(false)

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();

    setAllProducts(data);
  };

  const fetchShoplist = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/list`);
    const data = await response.json();

    setList(data);
  };

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
    fetchProducts();
  }, []);

  useEffect(() => {
    if (session?.user.id) fetchShoplist();
  }, [session?.user.id]);

  useEffect(() => {
    if (product !== "undefined" && product !== null) updateList();
  }, [product]);

  return (
    <div className="w-full relative flex justify-center bg-primary">
      {snackbar && <div className="bg-contrast4 fixed top-20 p-3 flex text-white justify-between items-center rounded-2xl animate">
        <button onClick={()=> router.push("/login")}><p className="px-3 font-sen text-[14px] hover:underline">Please log in to add item to the shopping list</p></button>
        <button onClick={()=>setSnackbar(false)}><CloseRoundedIcon sx={{size: 20}}/></button>
      </div>}
      <section className="grid1">
        {allProducts.length>0 ? allProducts.map((item, index) => (
          <ProductCard
            item={item}
            index={index}
            setProduct={setProduct}
            list={list}
            setSnackbar={setSnackbar}
          />
        )) : <div className="h-screen bg-constrast5"></div>}
      </section>
    </div>
  );
};

export default ProductsPage;
