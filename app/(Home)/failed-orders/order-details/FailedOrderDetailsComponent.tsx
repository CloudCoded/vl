"use client";

import React, { useCallback } from "react";

import {
  FailedOrdersDetailsColumns,
  FailedOrdersDetailsItem,
} from "@/components/table/failed-order-details-column";

import { usePathname, useRouter } from "next/navigation";
import OrderDetailsDisplay from "@/components/OrderDetails";

const initialFailedOrderDetailsData: FailedOrdersDetailsItem[] = [
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

// Define a simple vendor type and array
interface Vendor {
  key: string;
  label: string;
  value: string; // Or some other data you want to associate
}

const vendors: Vendor[] = [
  { key: "vendor1", label: "Vendor Alpha", value: "Alpha" },
  { key: "vendor2", label: "Vendor Beta", value: "Beta" },
  { key: "vendor3", label: "Vendor Gamma", value: "Gamma" },
];

export default function FailedOrdersDetailsComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = useCallback((updatedItem: FailedOrdersDetailsItem) => {
    console.log("Item changed (parent):", updatedItem);
  }, []);

  const handleSendToNerve = (
    items: FailedOrdersDetailsItem[],
    selectedVendorKey?: string
  ) => {
    console.log("Data to send to Nerve:", items);
    console.log("Selected Vendor Key:", selectedVendorKey);
  };

  const handleGoToAvailableBids = () => {
    router.push(`${pathname}/available-bids`);
  };

  const tableColumnsFactory = (
    onItemChange: (updatedItem: FailedOrdersDetailsItem) => void
  ) => {
    return FailedOrdersDetailsColumns(onItemChange);
  };

  return (
    <OrderDetailsDisplay<FailedOrdersDetailsItem>
      breadcrumbPreviousLabel="Failed Orders"
      previousRouteSegment={pathname.split("/")[1]}
      breadcrumbCurrentLabel="Order Details"
      cardTitle="Order Details"
      orderId="SBO 1141" // This should be dynamic if possible
      initialItemsData={initialFailedOrderDetailsData}
      tableColumnsFactory={tableColumnsFactory}
      hospitalName="Alifort Hospital" // This should be dynamic
      hospitalAddress="No. 204 Alimashaun close, laagos, Nigeria" // This should be dynamic
      orderDateTime="15-09-2024, 10:00am" // This should be dynamic
      primaryButtonText="Send to Nerve"
      onPrimaryButtonClick={handleSendToNerve}
      showVendorSelection={true}
      availableVendors={vendors}
      initialSelectedVendorKey="vendor1"
      showAvailableBidsButton={true} // Show the button
      onAvailableBidsClick={handleGoToAvailableBids} // Add the click handler
    />
  );
}
