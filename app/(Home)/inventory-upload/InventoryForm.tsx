import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { statesInNigeria } from "@/utils";

import AppSelect from "@/components/AppSelect";

const createInventorySchema = z.object({
  name: z.string().min(1, "Hospital Name is required"),
  product: z.string().min(1, "Product is required"),
  date: z.string().min(1, "Date to is required"), // Keep as string for now, will be formatted by date picker
  time: z.string().min(1, "Time is required"), // Keep as string for now, will be formatted by time picker
  img: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024, // 5MB limit
      `Max file size is 5MB.`
    )
    .refine(
      (files) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files?.[0]?.type
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export type InventoryFormData = z.infer<typeof createInventorySchema>;

interface InventoryFormProps {
  isPending: boolean;
  onSubmit: (data: InventoryFormData) => void;
}

const InventoryForm: React.FC<InventoryFormProps> = ({
  isPending,
  onSubmit,
}) => {
  const form = useForm<InventoryFormData>({
    resolver: zodResolver(createInventorySchema),
    defaultValues: {
      name: "",
      product: "",
      date: "",
      time: "",
      img: undefined,
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
        name="date"
        render={({ field }) => (
          <Input
            label="Date:"
            labelPlacement="outside"
            placeholder="e.g. YYYY-MM-DD"
            {...field}
            type="date" // Changed to date type
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.date?.message}
            isInvalid={!!form.formState.errors.date}
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
        name="time"
        render={({ field }) => (
          <Input
            label="Time:"
            labelPlacement="outside"
            placeholder="e.g. HH:MM"
            {...field}
            type="time" // Changed to time type
            radius="sm"
            size="lg"
            variant="bordered"
            errorMessage={form.formState.errors.time?.message}
            isInvalid={!!form.formState.errors.time}
          />
        )}
      />
      <Controller
        control={form.control}
        name="img"
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <Input
            label="Image:"
            labelPlacement="outside"
            type="file" // Changed to file type
            accept="image/png, image/jpeg, image/jpg, image/webp"
            radius="sm"
            size="lg"
            variant="bordered"
            onChange={(e) => {
              onChange(e.target.files);
            }}
            onBlur={onBlur}
            name={name}
            ref={ref}
            errorMessage={form.formState.errors.img?.message as string}
            isInvalid={!!form.formState.errors.img}
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
            `bg-fliteRed`
          )}
        >
          {isPending ? "Submitting, please wait..." : "Submit Inventory"}
        </Button>
      </div>
    </form>
  );
};

export default InventoryForm;
