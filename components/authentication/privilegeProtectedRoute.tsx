"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import PageLoadPlaceholder from "../PageLoadPlaceholder";
import { usePrivileges } from "@/app/providers/privilegeContext";

interface PrivilegeProtectedRouteProps {
  children: React.ReactNode;
  privilegeKey: string;
  redirectTo?: string;
}

interface Privileges {
  [key: string]: boolean | undefined;
}

const PrivilegeProtectedRoute = ({
  children,
  privilegeKey,
  redirectTo = "/",
}: PrivilegeProtectedRouteProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { privileges } = usePrivileges();
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.auth);
  const isAuthenticated = !!user?.userData;
  const hasPrivilege = (privileges as Privileges)[privilegeKey];

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    } else if (hasPrivilege === false) {
      router.replace(redirectTo);
    } else if (hasPrivilege !== undefined) {
      setIsLoading(false);
    }
  }, [hasPrivilege, isAuthenticated, redirectTo, router]);

  if (isLoading || hasPrivilege === undefined) {
    return <PageLoadPlaceholder />;
  }

  return <>{children}</>;
};

export default PrivilegeProtectedRoute;
