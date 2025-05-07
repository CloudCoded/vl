import { Input } from "@heroui/input";
import React from "react";
import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@heroui/button";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";

const countries = [
  {
    label: "Nigeria",
    key: "Nigeria",
  },
  {
    label: "Kenya",
    key: "Kenya",
  },
  {
    label: "Ethiopia",
    key: "ethiopia",
  },
];

export const registerSchema = z.object({
  country: z.string().min(1, "Country is required"),
  facility: z.string().min(1, "Country is required"),
  address: z.string().min(1, "Country is required"),
  category: z.string().min(1, "Country is required"),
  landmark: z.string().min(1, "Country is required"),
  state: z.string().min(1, "Country is required"),
  facility_size: z.string().min(1, "Country is required"),
  bed_no: z.string().min(1, "Country is required"),
  contact: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Country is required"),
  email: z.string().email("Please enter a valid email"),
  referral_code: z.string().optional(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export default function Register({
  form,
  onSubmit,
  state,
}: {
  form: UseFormReturn<RegisterFormData>;
  onSubmit: SubmitHandler<RegisterFormData>;
  state: { name: string; state_code: string }[];
}) {
  return (
    <form
      className="w-full max-w-2xl flex flex-col gap-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex w-full max-w-[150px] mb-5">
        <Controller
          name="country"
          control={form.control}
          render={({ field }) => (
            <Autocomplete
              aria-label="country"
              className="max-w-xs"
              placeholder="Select a country"
              variant="bordered"
              size="lg"
              onSelectionChange={(val) => field.onChange(val)}
              selectedKey={field.value}
              radius="sm"
            >
              {countries.map((country) => (
                <AutocompleteItem key={country.key}>
                  {country.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          )}
        />
      </div>
      <Controller
        name="facility"
        control={form.control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            errorMessage={form.formState.errors.facility?.message}
            label="Facility"
            labelPlacement="outside"
            placeholder="Enter your facility"
            type="text"
            variant="bordered"
            size="lg"
            radius="sm"
            className="w-full"
          />
        )}
      />
      <Controller
        name="address"
        control={form.control}
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            className="w-full"
            errorMessage={form.formState.errors.address?.message}
            label="Address Location"
            labelPlacement="outside"
            placeholder="Enter your Address Location"
            variant="bordered"
            size="lg"
            radius="sm"
            type="text"
          />
        )}
      />
      <Controller
        name="category"
        control={form.control}
        render={({ field }) => (
          <Autocomplete
            isRequired
            label="Category"
            className="max-w-full"
            labelPlacement="outside"
            placeholder="Select Category"
            variant="bordered"
            size="lg"
            onSelectionChange={(val) => field.onChange(val)}
            selectedKey={field.value}
            radius="sm"
          >
            {[{ name: "Hospital", value: "hospital" }].map((category) => (
              <AutocompleteItem key={category.name}>
                {category.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      />

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
        <Controller
          name="landmark"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              className="w-full"
              errorMessage={form.formState.errors.landmark?.message}
              label="Landmark"
              labelPlacement="outside"
              placeholder="Enter your Landmark"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
        <Controller
          name="state"
          control={form.control}
          render={({ field }) => (
            <Autocomplete
              isRequired
              label="State"
              className="max-w-xs"
              labelPlacement="outside"
              placeholder="Select State"
              variant="bordered"
              size="lg"
              onSelectionChange={(val) => field.onChange(val)}
              selectedKey={field.value}
              radius="sm"
            >
              {state?.map((state) => (
                <AutocompleteItem key={state.name}>
                  {state.name}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          )}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
        <Controller
          name="facility_size"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              className="w-full"
              errorMessage={form.formState.errors.facility_size?.message}
              label="Facility size"
              labelPlacement="outside"
              placeholder="Enter your Facility size"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
        <Controller
          name="bed_no"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              className="w-full"
              errorMessage={form.formState.errors.bed_no?.message}
              label="Bed Number"
              labelPlacement="outside"
              placeholder="Enter your Bed Number"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
        <Controller
          name="contact"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              className="w-full"
              errorMessage={form.formState.errors.contact?.message}
              label="Contact"
              labelPlacement="outside"
              placeholder="Enter your Contact"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              className="w-full"
              errorMessage={form.formState.errors.phone?.message}
              label="Phone Number"
              labelPlacement="outside"
              placeholder="Enter your Phone Number"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              errorMessage={form.formState.errors.email?.message}
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              size="lg"
              radius="sm"
            />
          )}
        />
        <Controller
          name="referral_code"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              className="w-full"
              errorMessage={form.formState.errors.referral_code?.message}
              label="Referral Code"
              labelPlacement="outside"
              placeholder="Enter your Referral Code"
              variant="bordered"
              size="lg"
              radius="sm"
              type="text"
            />
          )}
        />
      </div>

      <div className="flex w-full">
        <Button
          color="danger"
          type="submit"
          className="w-full text-white"
          radius="sm"
          size="lg"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}
