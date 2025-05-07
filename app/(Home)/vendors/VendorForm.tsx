import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { statesInNigeria } from "@/utils";

import AppSelect from "@/components/AppSelect";

const createVendorSchema = z.object({
  name: z.string().min(1, "Hospital Name is required"),
  product_type: z.string().min(1, "Product is required"),
  stock_update: z.string({
    required_error: "Stock update is required",
  }),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  contact_name: z.string().min(1, "Contact Name is required."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
  address: z.string().min(1, "Address is required."),
});

export type VendorFormData = z.infer<typeof createVendorSchema>;

interface VendorFormProps {
  isPending: boolean;
  onSubmit: (data: VendorFormData) => void;
}

const VendorForm: React.FC<VendorFormProps> = ({ isPending, onSubmit }) => {
  const form = useForm<VendorFormData>({
    resolver: zodResolver(createVendorSchema),
    defaultValues: {
      name: "",
      product_type: "",
      stock_update: undefined, // Changed for date type
      email: "",
      contact_name: "",
      phone: "",
      address: "",
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit((data) => {
          onSubmit(data);
          form.reset();
        })();
      }}
      className="grid grid-cols-2 gap-4"
    >
      <Controller
        control={form.control}
        name="name"
        render={({ field }) => (
          <div>
            <div>
              <AppSelect
                classNames="w-full"
                handleSelectionChange={field.onChange}
                options={statesInNigeria?.map((state) => ({
                  value: state.key,
                  label: state.label,
                }))}
                placeholder="Hospital Name"
                selected={field.value}
                radius="sm"
                size="lg"
                variant="bordered"
                errorMessage={form.formState.errors.name?.message}
                label="Hospital Name"
                labelPlacement="outside"
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={form.control}
        name="stock_update"
        render={({ field }) => (
          <AppSelect
            classNames="w-full"
            handleSelectionChange={field.onChange}
            options={[
              {
                key: "yes",
                label: "Yes",
              },
              {
                key: "no",
                label: "No",
              },
            ]?.map((update) => ({
              value: update.key,
              label: update.label,
            }))}
            placeholder="Stock Update"
            selected={field.value}
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.stock_update?.message}
            label="Stock Update"
            labelPlacement="outside"
          />
        )}
      />
      <Controller
        control={form.control}
        name="product_type"
        render={({ field }) => (
          <div>
            <div>
              <Input
                label="Product"
                labelPlacement="outside"
                placeholder="e.g., Blood"
                {...field}
                type="text"
                radius="sm"
                size="lg"
                variant="bordered"
                errorMessage={form.formState.errors.product_type?.message}
                isInvalid={!!form.formState.errors.product_type}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={form.control}
        name="email"
        render={({ field }) => (
          <Input
            label="Email:" // Changed label
            labelPlacement="outside"
            placeholder="e.g. vendor@example.com" // Changed placeholder
            {...field}
            type="email" // Changed to email type
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.email?.message}
            isInvalid={!!form.formState.errors.email}
          />
        )}
      />
      <Controller
        control={form.control}
        name="contact_name"
        render={({ field }) => (
          <Input
            label="Contact Name"
            labelPlacement="outside"
            placeholder="Enter contact name"
            {...field}
            type="text"
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.contact_name?.message}
            isInvalid={!!form.formState.errors.contact_name}
          />
        )}
      />
      <Controller
        control={form.control}
        name="phone"
        render={({ field }) => (
          <Input
            label="Phone Number"
            labelPlacement="outside"
            placeholder="8012345678" // e.g. 10 digits for the number after +234
            startContent={
              <div className="pointer-events-none flex items-center h-full">
                <span className="text-gray-500 pr-2">+234</span>
              </div>
            }
            {...field}
            type="tel"
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.phone?.message}
            isInvalid={!!form.formState.errors.phone}
          />
        )}
      />
      <Controller
        control={form.control}
        name="address"
        render={({ field }) => (
          <Input
            label="Address"
            labelPlacement="outside"
            placeholder="Enter address"
            {...field}
            type="text"
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.address?.message}
            isInvalid={!!form.formState.errors.address}
            className="col-span-2" // Assuming address might take full width
          />
        )}
      />

      <div className="col-span-2 flex justify-end pt-6">
        <Button
          size="lg"
          variant="solid"
          radius="sm"
          disabled={isPending}
          type="submit"
          isLoading={isPending}
          className={cn(
            "w-[190px] h-[50px] text-white px-[51px] py-[18px] rounded-[5px]",
            `bg-lite-primary`
          )}
        >
          {isPending ? "Submitting, please wait..." : "Submit Vendor"}
        </Button>
      </div>
    </form>
  );
};

export default VendorForm;
