'use client';
import { useState, useEffect }  from "react";
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
      <section className="grid1">
        {allBakeware.map((item) => <BakewareCard item={item}/>)} 
      </section>


  );
};

export default BakewarePage;
