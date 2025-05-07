"use client";

import { Button } from "@heroui/button";
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type VendorDeclinedOrdersItem = {
  id?: number;
  date: string;
  name: string;
  product: string;
  reason: string;
  hospital_name: string;
  last_update: string;
};

export const VendorDeclinedOrdersColumns = (
  handleSend: (data: VendorDeclinedOrdersItem) => void
): ColumnDef<VendorDeclinedOrdersItem>[] => [
  {
    accessorKey: "date",
    header: "Date",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
  },
  {
    accessorKey: "name",
    header: "Vendor Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
  },
  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
  },
  {
    accessorKey: "hospital_name",
    header: "Hospital Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
  },

  {
    accessorKey: "reason",
    header: "Reason(s)",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
    cell: ({ row }) => {
      const reason = row.original.reason;
      return <span className="max-w-12 w-10">{reason}</span>;
    },
  },
  {
    accessorKey: "last_update",
    header: "Last Update",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
  },
  {
    accessorKey: "action",
    header: "Action",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<VendorDeclinedOrdersItem, unknown>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button
            variant="bordered"
            size="sm"
            onPress={() => handleSend(row.original)}
            className="bg-lite-primary text-white"
            radius="sm"
          >
            Send to Vendor Success
          </Button>
        </div>
      );
    },
  },
];
