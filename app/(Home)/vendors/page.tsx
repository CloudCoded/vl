import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import VendorComponent from "./VendorComponent";

export default function VendorsPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <VendorComponent />
      </Suspense>
    </div>
  );
}
