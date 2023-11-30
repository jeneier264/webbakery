"use client";
import React from "react";


const CompToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>My cool content here!</div>
    );
  });

export default CompToPrint;
