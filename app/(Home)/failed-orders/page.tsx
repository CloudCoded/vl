import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import FailedOrdersComponent from "./FailedOrdersComponent";

export default function FailedOrdersPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <FailedOrdersComponent />
      </Suspense>
    </div>
  );
}
