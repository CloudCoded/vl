import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import VendorPaymentTermsComponent from "./VendorPaymentTermsComponent";

export default function VendorPaymentsTerms() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <VendorPaymentTermsComponent />
      </Suspense>
    </div>
  );
}
