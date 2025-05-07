import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import DeclinedQuotationsComponent from "./DeclinedQuotationsComponent";

export default function DeclinedQuotationsPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <DeclinedQuotationsComponent />
      </Suspense>
    </div>
  );
}
