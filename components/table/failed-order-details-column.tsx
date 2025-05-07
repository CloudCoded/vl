"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { ColumnDef, ColumnMeta } from "@tanstack/react-table";

interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string;
}

export type FailedOrdersDetailsItem = {
  id: number; // Changed from id?: number to id: number
  items: string;
  qty: string;
  brand: string;
  type: string;
  unit_price: string;
};

const UnitPriceCell = ({
  initialValue,
  onPriceChange,
}: {
  initialValue: string;
  onPriceChange: (newPrice: string) => void;
}) => {
  const [currentPrice, setCurrentPrice] = useState<string>(initialValue);

  useEffect(() => {
    // Only update local state if the initialValue from props
    // is different from the current local state.
    // This prevents resetting the input if the change originated from this input itself
    // and the parent state has already been updated to reflect currentPrice.
    if (initialValue !== currentPrice) {
      setCurrentPrice(initialValue);
    }
  }, [initialValue, currentPrice]); // Added currentPrice to dependency array

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.target.value;
    setCurrentPrice(newPrice);
    onPriceChange(newPrice);
  };

  return (
    <span className="max-w-12">
      <Input
        aria-label="Unit Price"
        labelPlacement="outside"
        placeholder="Enter Unit Price"
        value={currentPrice}
        type="text"
        radius="sm"
        size="md"
        variant="bordered"
        errorMessage={""}
        isInvalid={false}
        onChange={handleInputChange}
      />
    </span>
  );
};

export const FailedOrdersDetailsColumns = (
  onRowItemChange: (updatedItem: FailedOrdersDetailsItem) => void
): ColumnDef<FailedOrdersDetailsItem>[] => {
  return [
    {
      accessorKey: "id",
      header: "S/N",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
    },
    {
      accessorKey: "items",
      header: "Items",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
    },
    {
      accessorKey: "qty",
      header: "Quantity",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
    },
    {
      accessorKey: "type",
      header: "Type",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
      cell: ({ row }) => {
        const type = row.original.type;
        return <span className="max-w-12 w-10">{type}</span>;
      },
    },
    {
      accessorKey: "unit_price",
      header: "Unit Price",
      meta: {
        headerClassName: "bg-lite-primary text-white",
      } as CustomColumnMeta<FailedOrdersDetailsItem, unknown>,
      cell: ({ row }) => {
        const item = row.original;
        return (
          <UnitPriceCell
            initialValue={item.unit_price}
            onPriceChange={(newUnitPrice) => {
              onRowItemChange({ ...item, unit_price: newUnitPrice });
            }}
          />
        );
      },
    },
  ];
};
