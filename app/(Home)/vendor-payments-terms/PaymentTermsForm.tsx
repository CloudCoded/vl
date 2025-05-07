import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { statesInNigeria } from "@/utils";

import AppSelect from "@/components/AppSelect";

const createVendorPaymentTermsSchema = z.object({
  vendor: z.string().min(1, "Vendor Name is required"),
  product: z.string().min(1, "Product is required"),
  term: z.string({
    required_error: "Term is required",
  }),
  duration: z.string().min(1, "Duration is required."),
});

export type VendorPaymentTermsFormData = z.infer<
  typeof createVendorPaymentTermsSchema
>;

interface VendorPaymentTermsFormProps {
  isPending: boolean;
  onSubmit: (data: VendorPaymentTermsFormData) => void;
}

const VendorPaymentTermsForm: React.FC<VendorPaymentTermsFormProps> = ({
  isPending,
  onSubmit,
}) => {
  const form = useForm<VendorPaymentTermsFormData>({
    resolver: zodResolver(createVendorPaymentTermsSchema),
    defaultValues: {
      vendor: "",
      product: "",
      term: "",
      duration: "",
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
        name="vendor"
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
                placeholder="Vendor Name"
                selected={field.value}
                radius="sm"
                size="lg"
                variant="bordered"
                errorMessage={form.formState.errors.vendor?.message}
                label="Vendor Name"
                labelPlacement="outside"
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={form.control}
        name="duration"
        render={({ field }) => (
          <AppSelect
            classNames="w-full"
            handleSelectionChange={field.onChange}
            options={[
              {
                key: "2 months",
                label: "2 Months",
              },
              {
                key: "3 months",
                label: "3 Months",
              },
            ]?.map((update) => ({
              value: update.key,
              label: update.label,
            }))}
            placeholder="Duration"
            selected={field.value}
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.duration?.message}
            label="Duration"
            labelPlacement="outside"
          />
        )}
      />
      <Controller
        control={form.control}
        name="product"
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
                errorMessage={form.formState.errors.product?.message}
                isInvalid={!!form.formState.errors.product}
              />
            </div>
          </div>
        )}
      />

      <Controller
        control={form.control}
        name="term"
        render={({ field }) => (
          <Input
            label="Payment Term"
            labelPlacement="outside"
            placeholder="Enter payment term"
            {...field}
            type="text"
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.term?.message}
            isInvalid={!!form.formState.errors.term}
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

export default VendorPaymentTermsForm;
