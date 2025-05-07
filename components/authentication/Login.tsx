"use client";
import { Input } from "@heroui/input";
import React from "react";
import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@heroui/button";
import { Eye, EyeClosed } from "lucide-react";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Username is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export default function Login({
  form,
  onSubmit,
  loading,
}: {
  form: UseFormReturn<LoginFormData>;
  onSubmit: SubmitHandler<LoginFormData>;
  loading: boolean;
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              errorMessage={form.formState.errors.email?.message}
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              size="lg"
              radius="sm"
              isDisabled={loading}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              className="w-full"
              errorMessage={form.formState.errors.password?.message}
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              variant="bordered"
              size="lg"
              radius="sm"
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              isDisabled={loading}
            />
          )}
        />

        <div className="flex w-full">
          <Button
            color="primary"
            type="submit"
            className="w-full text-white"
            radius="sm"
            size="lg"
            isLoading={loading}
            isDisabled={loading}
          >
            Log In
          </Button>
        </div>
      </form>
    </>
  );
}
