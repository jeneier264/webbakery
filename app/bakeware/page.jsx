"use client";
import { useState, useEffect } from "react";
import BakewareCard from "@components/BakewareCard";

const BakewarePage = () => {
  const [allBakeware, setAllBakeware] = useState([]);

  const fetchBakeware = async () => {
    const response = await fetch("/api/bakeware");
    const data = await response.json();

    setAllBakeware(data);
  };

  useEffect(() => {
      fetchBakeware();    
  }, []);



  return (
    <div className="w-full relative flex justify-center bg-primary">
      <section className="grid1 bg-primary">
        {allBakeware.length>0 ? allBakeware.map((item) => (
          <BakewareCard item={item} />
        )) : <div className="h-screen bg-constrast5"></div>}
      </section>
    </div>
  );
};

export default BakewarePage;
