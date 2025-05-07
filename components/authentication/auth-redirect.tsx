"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import PageLoadPlaceholder from "../PageLoadPlaceholder";

interface AuthRedirectProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const AuthRedirect = ({
  children,
  redirectTo = "/dashboard/",
}: AuthRedirectProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state?.auth);
  const isAuthenticated = !!user?.userData;

  const authRoutes = ["/"];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // if (isAuthenticated && authRoutes.includes(pathname)) {
      //   router.replace(redirectTo);
      // }

      if (!isAuthenticated && !authRoutes.includes(pathname)) {
        router.replace("/"); // Redirect to login page
      } else if (isAuthenticated && authRoutes.includes(pathname)) {
        router.replace(redirectTo); // Redirect to dashboard
      }

      // Once the auth check is complete, stop loading
      setIsLoading(false);
    }
  }, [isAuthenticated, pathname, redirectTo, router]);

  if (isLoading) return <PageLoadPlaceholder />;

  return <>{children}</>;
};

export default AuthRedirect;
