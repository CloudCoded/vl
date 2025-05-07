"use client";

import { Button } from "@heroui/button";
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type FailedOrdersItem = {
  id?: number;
  date: string;
  name: string;
  product: string;
  reason: string;
  status: string;
  last_update: string;
};

export const FailedOrdersColumns = (
  handleSort: (data: FailedOrdersItem) => void
): ColumnDef<FailedOrdersItem>[] => [
  {
    accessorKey: "date",
    header: "Date",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
  },
  {
    accessorKey: "name",
    header: "Hospital Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
  },
  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
  },

  {
    accessorKey: "reason",
    header: "Reason(s)",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
    cell: ({ row }) => {
      const reason = row.original.reason;
      return <span className="max-w-12 w-10">{reason}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`${
            status === "Delivered" ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="w-2 h-2 inline-block mr-2 rounded-full bg-fliteRed"></span>{" "}
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "last_update",
    header: "Last Update",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
  },
  {
    accessorKey: "action",
    header: "Action",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<FailedOrdersItem, unknown>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button
            variant="bordered"
            size="sm"
            onPress={() => handleSort(row.original)}
            className="bg-lite-primary text-white"
            radius="sm"
          >
            Sort
          </Button>
        </div>
      );
    },
  },
];
