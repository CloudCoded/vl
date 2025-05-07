"use client";

import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type VendorItem = {
  id?: number;
  name: string;
  product_type: string;
  stock_update: string;
  email: string;
  contact_name: string;
  phone: string;
  address: string;
};

export const VendorColumns: ColumnDef<VendorItem>[] = [
  {
    accessorKey: "id",
    header: "S/N",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "product_type",
    header: "Type",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "name",
    header: "Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "stock_update",
    header: "Stock Update",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
    cell: ({ getValue }) => {
      const email = getValue() as string;
      return (
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      );
    },
  },
  {
    accessorKey: "contact_name",
    header: "Contact Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "phone",
    header: "Phone No.",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
  {
    accessorKey: "address",
    header: "Address",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorItem, unknown>,
  },
];
