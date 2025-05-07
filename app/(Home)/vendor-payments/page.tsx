import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import { VendorPaymentComponent } from "./VendorPaymentComponent";

export default function VendorPaymentsPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <VendorPaymentComponent />
      </Suspense>
    </div>
  );
}
