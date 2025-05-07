import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import VendorDeclinedOrdersComponent from "./VendorDeclinedOrdersComponent";

export default function VendorDeclinedOrders() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <VendorDeclinedOrdersComponent />
      </Suspense>
    </div>
  );
}
