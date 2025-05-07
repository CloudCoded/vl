import React, { Suspense } from "react";

import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";

import { QuipComponent } from "./QuipComponent";

export default function QuipPage() {
  return (
    <Suspense fallback={<PageLoadPlaceholder />}>
      <QuipComponent />
    </Suspense>
  );
}
