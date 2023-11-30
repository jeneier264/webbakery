"use client";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CompToPrint from './CompToPrint';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <CompToPrint  ref={componentRef} />
      <button onClick={()=>handlePrint()}>Print this out!</button>
    </div>
  );
};

export default Example;