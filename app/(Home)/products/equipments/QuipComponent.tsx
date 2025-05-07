"use client";
import React from "react";
import { ProductDetailsSection } from "../ProductDetailsSection";
 

export const QuipComponent = () => {
  const tableData = Array(8)
    .fill({
      id: 1,
      name: "10ml Syringe and Needle",
      brand: "Agary, Dele,",
      carton_size: "12pks/ctn",
      description: "10ml Syringe and Needle",
      price: "6,800",
      pack_size: "100pcs/pks",
    })
    .map((item, index) => ({ ...item, id: index + 1 }));

  const handleDownload = () => {
    console.log("download");
  };

  return (
    <main className="pt-5">
      <ProductDetailsSection
        tableData={tableData}
        title="Quip"
        handleDownload={handleDownload}
      />
    </main>
  );
};
