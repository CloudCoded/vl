"use client";

import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type VendorPaymentTermItem = {
  id?: number;
  vendor: string;
  product: string;
  term: string;
  duration: string;
};

export const VendorPaymentTermColumns: ColumnDef<VendorPaymentTermItem>[] = [
  {
    accessorKey: "id",
    header: "S/N",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorPaymentTermItem, unknown>,
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorPaymentTermItem, unknown>,
  },
  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorPaymentTermItem, unknown>,
  },
  {
    accessorKey: "term",
    header: "Term",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorPaymentTermItem, unknown>,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorPaymentTermItem, unknown>,
  },
];
