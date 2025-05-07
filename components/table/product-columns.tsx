"use client";
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}
export type ProductData = {
  id?: number;
  name: string;
  brand: string;
  carton_size: string;
  description: string;
  price: string;
  pack_size: string;
  classNames?: string;
};

export const ProductColumns = (
  headerClassName: string
): ColumnDef<ProductData, unknown>[] => [
  {
    accessorKey: "id",
    header: "S/N",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
  {
    accessorKey: "name",
    header: "Name",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },

  {
    accessorKey: "brand",
    header: "Brand",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
  {
    accessorKey: "carton_size",
    header: "Carton Size",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
  {
    accessorKey: "description",
    header: "Description",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
  {
    accessorKey: "price",
    header: "Price",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
  {
    accessorKey: "pack_size",
    header: "Pack Size",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<ProductData, unknown>,
  },
];
