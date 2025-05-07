"use client";

import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

// Extend the ColumnMeta type to include headerClassName
interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Consumption = {
  id: string;
  date: string;
  product: string;
  predicted: string;
  actual: string;
};

export const pricingColumns: ColumnDef<Consumption>[] = [
  {
    accessorKey: "date",
    header: "Date",
    meta: {
      headerClassName: "bg-[#E3E3E3]", // Add Tailwind class for the date header
    } as CustomColumnMeta<Consumption, unknown>, // Cast to the custom type
  },
  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: "bg-[#AEAEAE] text-white", // Add Tailwind class for the product header
    } as CustomColumnMeta<Consumption, unknown>, // Cast to the custom type
  },
  {
    accessorKey: "predicted",
    header: "Predicted Consumption",
    meta: {
      headerClassName: "bg-black/70 text-white", // Add Tailwind class for the predicted header
    } as CustomColumnMeta<Consumption, unknown>, // Cast to the custom type
  },
  {
    accessorKey: "actual",
    header: "Actual Consumption",
    meta: {
      headerClassName: "bg-nerveRed text-white", // Add Tailwind class for the actual header
    } as CustomColumnMeta<Consumption, unknown>, // Cast to the custom type
  },
];
