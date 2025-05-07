import React, { Suspense } from "react";

import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";

import { ConsumablesComponent } from "./ConsumablesComponent";

export default function ConsumablesPage() {
  return (
    <Suspense fallback={<PageLoadPlaceholder />}>
      <ConsumablesComponent />
    </Suspense>
  );
}
