import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Ensure T is an object type for Object.values and item[field]
export function useSearch<T extends Record<string, any>>(
  initialData: T[],
  searchFields?: (keyof T)[]
) {
  const [filteredData, setFilteredData] = useState<T[]>(initialData);
  const searchParams = useSearchParams();

  // Memoize searchFields string representation for stable dependency
  const searchFieldsString = searchFields ? JSON.stringify(searchFields) : "";

  useEffect(() => {
    const searchTerm = searchParams.get("q")?.toLowerCase() || "";
    if (searchTerm) {
      const dataToFilter = initialData.filter((item) => {
        if (searchFields && searchFields.length > 0) {
          // Search only in specified fields
          return searchFields.some((field) =>
            String(item[field]).toLowerCase().includes(searchTerm)
          );
        } else {
          // Search in all stringified values of the item
          return Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm)
          );
        }
      });
      setFilteredData(dataToFilter);
    } else {
      setFilteredData(initialData);
    }
  }, [searchParams, initialData, searchFieldsString, searchFields]);

  return filteredData;
}
