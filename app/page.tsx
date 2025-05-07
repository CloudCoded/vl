"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import Login, {
  LoginFormData,
  loginSchema,
} from "@/components/authentication/Login";

import { useDispatch } from "react-redux";
import { setUser } from "@/store/authSlice";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { useSignInUser } from "@/hooks/use-auth";
import { addToast } from "@heroui/toast";

export default function SignIn() {
  const dispatch = useDispatch();

  const { loginMutate, isPending } = useSignInUser();

  const router = useRouter();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (data: LoginFormData) => {
    const user = {
      address: "yaba",
      admin: "admin",
      city: "lagos",
      class: "admin",
      email: "flite@lifebank.ng",
      first_name: "John",
      geolocation: "10.1234, 20.5678",
      id: "user123",
      last_name: "Doe",
      otp: null,
      password: "password123",
      state: "Lagos",
      status: "active",
      username: "johndoe",
    };

    dispatch(setUser(user));
    router.push("/dashboard");
    loginMutate(data, {
      onSuccess: (res) => {
        if (
          res?.data === "failed" ||
          res?.data === "Incorrect Email / Password!"
        ) {
          addToast({
            title: "Invalid Credentials",
            description: "Please try again",
            color: "danger",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
          });

          return;
        }

        dispatch(setUser(res.data));
        router.push("/dashboard");
        addToast({
          title: "Success",
          description: "You have successfully logged in",
          color: "success",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
      },
      onError: (error) => {
        addToast({
          title: error?.response?.data?.status ?? "Network Error",
          description: error?.response?.data?.message ?? "Please try again",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
      },
    });
  };

  // Function to generate styles with more even spacing using a grid concept
  const generateEvenlySpacedStyles = (
    count: number,
    gridX: number,
    gridY: number
  ) => {
    const styles = [];
    const cellWidth = 100 / gridX;
    const cellHeight = 100 / gridY;
    let elementIndex = 0;

    for (let y = 0; y < gridY; y++) {
      for (let x = 0; x < gridX; x++) {
        if (elementIndex >= count) break;

        // Calculate random position within the current cell
        const randomOffsetX = Math.random() * cellWidth;
        const randomOffsetY = Math.random() * cellHeight;

        const left = x * cellWidth + randomOffsetX;
        const top = y * cellHeight + randomOffsetY;

        const duration = 10 + Math.random() * 10; // Random duration between 10s and 20s

        styles.push({
          // Clamp values to prevent overflow, though overflow is hidden on parent
          top: `${Math.min(95, Math.max(5, top))}%`, // Keep within bounds slightly
          left: `${Math.min(95, Math.max(5, left))}%`, // Keep within bounds slightly
          animationDuration: `${duration}s`,
        } as React.CSSProperties);
        elementIndex++;
      }
      if (elementIndex >= count) break;
    }
    return styles;
  };

  // Define grid dimensions (e.g., 5 columns, 4 rows for 20 elements)
  const gridColumns = 5;
  const gridRows = 4;
  const totalElements = 20;
  const backgroundTextStyles = generateEvenlySpacedStyles(
    totalElements,
    gridColumns,
    gridRows
  );

  return (
    <main className="flex w-full bg-lite-primary h-screen overflow-hidden relative">
      {/* Background Text Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {backgroundTextStyles.map((style, index) => (
          <span
            key={index}
            className="absolute text-white/10 text-lg whitespace-nowrap animate-move-text"
            style={style}
          >
            Lite Ops
          </span>
        ))}
      </div>

      {/* Foreground Content */}
      <section className="md:w-1/2 mx-auto flex flex-col justify-center items-center relative z-10">
        <div className="flex flex-col justify-center items-center mx-auto p-5 px-10 bg-white rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <h1 className="font-black text-2xl text-[#A04A1D]">
                  Welcome Back!
                </h1>
                <h2 className="font-black text-xl text-gray-700">Log In</h2>
              </div>
            </motion.div>
          </AnimatePresence>
          <section className="w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Login
                  form={loginForm}
                  onSubmit={onLoginSubmit}
                  loading={isPending}
                />
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </section>
    </main>
  );
}
