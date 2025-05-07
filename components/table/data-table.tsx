"use client"

import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnMeta,
  type Updater,
} from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@heroui/button"
import { useEffect, useState } from "react"
import { Pagination } from "@heroui/pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { ResponsiveCardView } from "./responsive-card-view"
import { Card } from "@heroui/card"
 
interface CustomColumnMeta<TData, TValue> extends ColumnMeta<TData, TValue> {
  headerClassName?: string
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function AppTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const initialPageIndex = Number.parseInt(searchParams.get("page") || "1", 10) - 1

  const [sorting, setSorting] = useState<SortingState>([])

  const handleSortingChange = (updater: Updater<SortingState>) => {
    const newSorting = typeof updater === "function" ? updater(table.getState().sorting) : updater

    setSorting(newSorting)
    table.setPageIndex(0)
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: handleSortingChange,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: initialPageIndex,
      },
    },
  })

  useEffect(() => {
    table.setPageIndex(initialPageIndex)
  }, [initialPageIndex])

  const updateUrl = (pageIndex: number) => {
    const currentPage = Number.parseInt(searchParams.get("page") || "1", 10) - 1

    if (currentPage !== pageIndex) {
      const params = new URLSearchParams(searchParams.toString())

      params.set("page", (pageIndex + 1).toString())

      router.replace(`?${params.toString()}`, { scroll: false })
    }
  }
  const handlePageChange = (page: number) => {
    const newPageIndex = page - 1

    if (table.getState().pagination.pageIndex !== newPageIndex) {
      table.setPageIndex(newPageIndex)
      updateUrl(newPageIndex)
    }
  }

  const handlePreviousPage = () => {
    if (table.getCanPreviousPage()) {
      const newPageIndex = table.getState().pagination.pageIndex - 1

      table.setPageIndex(newPageIndex)
      updateUrl(newPageIndex)
    }
  }

  const handleNextPage = () => {
    if (table.getCanNextPage()) {
      const newPageIndex = table.getState().pagination.pageIndex + 1

      table.setPageIndex(newPageIndex)
      updateUrl(newPageIndex)
    }
  }

  return (
    <div className="w-full">
      {isMobile ? (
        // Card view for mobile
        <div className="space-y-4">
          {table.getRowModel().rows.map((row) => (
            <ResponsiveCardView key={row.id} columns={columns} row={row} />
          ))}
        </div>
      ) : (
        // Table view for larger screens
        <Card className="">
          <Table className="striped-table min-w-[300px]">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const meta = header.column.columnDef.meta as CustomColumnMeta<TData, TValue>
                    const headerClassName = meta?.headerClassName || ""

                    return (
                      <TableHead key={header.id} className={cn(headerClassName, "py-[25px] px-3")}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-[25px] px-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      )}

      {table.getRowModel().rows?.length > 10 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <Button variant="bordered" size="sm" onPress={handlePreviousPage} isDisabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Pagination
            className="text-white"
            initialPage={table.getState().pagination.pageIndex + 1}
            total={table.getPageCount()}
            onChange={handlePageChange}
            page={table.getState().pagination.pageIndex + 1}
          />
          <Button variant="bordered" size="sm" onPress={handleNextPage} isDisabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

