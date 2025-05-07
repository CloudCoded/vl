import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import VendorDeclinedOrdersDetailsComponent from "./VendorDeclinedOrderDetailsComponent";

export default function VendorDeclinedOrderDetails() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <VendorDeclinedOrdersDetailsComponent />
      </Suspense>
    </div>
  );
}
