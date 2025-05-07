import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import FailedOrdersDetailsComponent from "./FailedOrderDetailsComponent";

export default function FailedOrderDetails() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <FailedOrdersDetailsComponent />
      </Suspense>
    </div>
  );
}
