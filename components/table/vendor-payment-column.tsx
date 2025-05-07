"use client";

import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type VendorPayment = {
  id?: number;
  vendor: string;
  product: string;
  orders: string;
  total_due: string;
  payment_confirmation: string;
  payment_in_progress: string;
  payment_sent_to_bank: string;
  date: string; // Added date field
};

export const vendorPaymentColumns = (
  handleViewDetails: (data: VendorPayment) => void,
  handleViewInvoice: (data: VendorPayment) => void, // Renamed from handleSend and updated type
  headerClassName?: string
): ColumnDef<VendorPayment>[] => [
  {
    accessorKey: "id",
    header: "S/N",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  {
    accessorKey: "product",
    header: "Product",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },

  {
    accessorKey: "orders",
    header: "Orders",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  {
    accessorKey: "total_due",
    header: "Total Amount Due",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  {
    accessorKey: "payment_confirmation",
    header: "Payment Confirmation",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  {
    accessorKey: "payment_in_progress",
    header: "Payment In Progress",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },
  
  {
    accessorKey: "payment_sent_to_bank",
    header: "Payment Sent To Bank",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
  },

  {
    accessorKey: "view_invoice",
    header: "View Invoice",
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
    cell: ({ row }) => { // Added row to access original data
      return (
        <div className="flex gap-2">
          <Button variant="light" size="md" onPress={() => handleViewInvoice(row.original)} className=" ">
            View
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Details", // Changed header from "View Message" to "Details"
    meta: {
      headerClassName: headerClassName,
    } as CustomColumnMeta<VendorPayment, unknown>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button
            variant="solid"
            size="md"
            onPress={() => handleViewDetails(row.original)}
            className={cn("bg-[#008753] text-white", headerClassName)}
            radius="sm"
          >
            View
          </Button>
        </div>
      );
    },
  },
];
