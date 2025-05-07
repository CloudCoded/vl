import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import AvailableBidsComponent from "./AvailableBids";

export default function AvailableBidsPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <AvailableBidsComponent />
      </Suspense>
    </div>
  );
}
