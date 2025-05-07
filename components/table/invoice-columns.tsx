"use client";

 
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";
 

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type Invoice = {
  id?: number;
  date: string;
  order_number: string;
  product: string;
  product_type: string;
  qty: string;
  cost: string;
  unit: string;
  fees: string;
  matching: string;
  total: string;
  payment_type: string;
};

export const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "date",
    header: "Date",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },

  {
    accessorKey: "order_number",
    header: "Order Number",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },

  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "product_type",
    header: "Product Type",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "qty",
    header: "Qty",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "cost",
    header: "Cost",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "unit",
    header: "Returned Unit",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "fees",
    header: "Returned Fees",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "matching",
    header: "Cross-Matching",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "total",
    header: "Total Payable",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
  {
    accessorKey: "payment_type",
    header: "Payment Type",
    meta: {
      headerClassName: "bg-fliteRed text-white",
    } as CustomColumnMeta<Invoice, unknown>,
  },
];
