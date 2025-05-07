import { Key, ReactNode } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";

export default function AppSelect({
  classNames,
  placeholder,
  label,
  variant,
  options,
  handleSelectionChange,
  selected,
  color,
  errorMessage,
  isRequired,
  radius,
  disabled,
  size,
  labelPlacement,
}: {
  classNames?: string;
  placeholder?: string;
  label?: string;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  options?: { label: string; value: string; description?: string }[];
  handleSelectionChange: (value: Key | null) => void;
  selected?: Key | null;
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
  errorMessage?: ReactNode | undefined;
  isRequired?: boolean;
  disabled?: boolean;
  radius?: "sm" | "md" | "lg" | "none" | "full" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Autocomplete
        aria-label="Select options..."
        className={classNames}
        color={color}
        defaultItems={options}
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
        isRequired={isRequired}
        label={label}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        selectedKey={selected as string}
        variant={variant}
        onSelectionChange={handleSelectionChange}
        isDisabled={disabled}
        radius={radius}
        size={size}
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      {/* <p className="text-default-500 text-small">Selected: {selected as string}</p> */}
    </div>
  );
}
