"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {
  FailedOrdersDetailsColumns,
  FailedOrdersDetailsItem,
} from "@/components/table/failed-order-details-column";
import OrderDetailsDisplay from "@/components/OrderDetails";

const initialVendorDeclinedOrderDetailsData: FailedOrdersDetailsItem[] = [
  {
    id: 1,
    items: "Equinox",
    qty: "2",
    brand: "Brand A",
    type: "Type A",
    unit_price: "100",
  },
  {
    id: 2,
    items: "Equinox",
    qty: "2",
    brand: "Brand A",
    type: "Type A",
    unit_price: "100",
  },
  {
    id: 3,
    items: "Equinox",
    qty: "2",
    brand: "Brand A",
    type: "Type A",
    unit_price: "100",
  },
  {
    id: 4,
    items: "Equinox",
    qty: "2",
    brand: "Brand A",
    type: "Type A",
    unit_price: "100",
  },
  {
    id: 5,
    items: "Equinox",
    qty: "2",
    brand: "Brand A",
    type: "Type A",
    unit_price: "100",
  },
];

interface Vendor {
  key: string;
  label: string;
  value: string;
}

const vendors: Vendor[] = [
  { key: "vendor1", label: "Vendor Alpha", value: "Alpha" },
  { key: "vendor2", label: "Vendor Beta", value: "Beta" },
  { key: "vendor3", label: "Vendor Gamma", value: "Gamma" },
];

export default function VendorDeclinedOrdersDetailsComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = useCallback((updatedItem: FailedOrdersDetailsItem) => {
    console.log("Item changed (parent):", updatedItem);
  }, []);

  const handleSendToVendor = (
    items: FailedOrdersDetailsItem[],
    selectedVendorKey?: string
  ) => {
    console.log("Data to resend to vendor:", items);
    console.log("Selected Vendor Key:", selectedVendorKey);
  };

  const tableColumnsFactory = (
    onItemChange: (updatedItem: FailedOrdersDetailsItem) => void
  ) => {
    return FailedOrdersDetailsColumns(onItemChange);
  };

  return (
    <OrderDetailsDisplay<FailedOrdersDetailsItem>
      breadcrumbPreviousLabel="Vendor Declined Orders"
      previousRouteSegment={pathname.split("/")[1]}
      breadcrumbCurrentLabel="Order Details"
      cardTitle="Order Details"
      orderId="SBO 1142"
      initialItemsData={initialVendorDeclinedOrderDetailsData}
      tableColumnsFactory={tableColumnsFactory}
      hospitalName="Beta Care Hospital"
      hospitalAddress="123 Health St, Medicity, State"
      orderDateTime="16-09-2024, 11:00am"
      primaryButtonText="Send to Vendor"
      onPrimaryButtonClick={handleSendToVendor}
      showVendorSelection={true}
      availableVendors={vendors}
      initialSelectedVendorKey="vendor2"
    />
  );
}
