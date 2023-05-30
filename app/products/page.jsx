"use client";
import { useState, useEffect } from "react";
import ProductCard from "@components/ProductCard";

/* add search for product
add 'add to list' button 
shopping list
categorize the products*/
const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();

    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="grid1">
      {allProducts.map((item, index) => (
        <ProductCard item={item} index={index} />
      ))}
    </section>
  );
};

export default ProductsPage;
