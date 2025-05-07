import React, { Suspense } from "react";
import Dashboard from "./Dashboard";
import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<PageLoadPlaceholder />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
