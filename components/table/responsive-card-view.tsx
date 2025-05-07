"use client";

import { type ColumnDef, flexRender } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";

interface CardViewProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  row: any;
}

export function ResponsiveCardView<TData, TValue>({
  row,
}: CardViewProps<TData, TValue>) {
  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-4">
        <div className="grid gap-3">
          {row.getVisibleCells().map((cell: any) => {
            // Get the column definition to extract header
            const header = flexRender(cell.column.columnDef.header, {
              ...cell.getContext(),
              table: cell.column.table,
            });

            return (
              <div key={cell.id} className="grid grid-cols-2 gap-2">
                <div className="font-medium text-muted-foreground">
                  {header}
                </div>
                <div>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
