import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import CancelledOrderComponent from "./CancelledOrderComponent";

export default function CancelledOrders() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <CancelledOrderComponent />
      </Suspense>
    </div>
  );
}
