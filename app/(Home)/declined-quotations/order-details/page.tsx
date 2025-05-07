import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import DeclinedQuotationsDetailsComponent from "./DeclinedQuotationsDetailsComponent";

export default function DeclinedQuotationsDetailsPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <DeclinedQuotationsDetailsComponent />
      </Suspense>
    </div>
  );
}
