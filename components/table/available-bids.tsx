"use client";

import { cn } from "@/lib/utils";

import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type AvailableBidsItem = {
  id?: string;
  date: string;
  name: string;
  type: string;
  status: string;
};

export const AvailableBidsColumns: ColumnDef<AvailableBidsItem>[] = [
  {
    accessorKey: "date",
    header: "Date Created",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<AvailableBidsItem, unknown>,
  },
  {
    accessorKey: "id",
    header: "ID",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<AvailableBidsItem, unknown>,
  },
  {
    accessorKey: "name",
    header: "Name",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<AvailableBidsItem, unknown>,
  },
  {
    accessorKey: "type",
    header: "Type",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<AvailableBidsItem, unknown>,
  },

  {
    accessorKey: "status",
    header: "Status",
    meta: {
      headerClassName: "bg-lite-primary text-white",
    } as CustomColumnMeta<AvailableBidsItem, unknown>,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`${
            status.toLowerCase() === "verified"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          <span
            className={cn(
              "w-2 h-2 inline-block mr-2 rounded-full",
              status.toLowerCase() === "verified"
                ? "bg-green-500"
                : "bg-red-500"
            )}
          ></span>{" "}
          {status}
        </span>
      );
    },
  },
];
