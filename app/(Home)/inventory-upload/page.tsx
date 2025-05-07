import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import React, { Suspense } from "react";
import InventoryComponent from "./InventoryComponent";

export default function InventoryUploadPage() {
  return (
    <Suspense fallback={<PageLoadPlaceholder />}>
      <InventoryComponent />
    </Suspense>
  );
}
