import authService from "@/services/api/auth/auth.service";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

type Privileges = ReturnType<typeof authService.getPrivileges>;
type PrivilegeContextType = { privileges: Privileges };

const PrivilegeContext = createContext<PrivilegeContextType | undefined>(
  undefined
);

export const usePrivileges = () => {
  const context = useContext(PrivilegeContext);

  if (!context) {
    throw new Error("usePrivileges must be used within a PrivilegeProvider");
  }

  return context;
};

export const PrivilegeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.auth);
  const { userData } = user || {};

  const privileges = useMemo(
    () => authService.getPrivileges(userData) || {},
    [userData]
  );

  useEffect(() => {
    if (!userData) {
      router.replace("/");
    }
  }, [userData, router]);

  return (
    <PrivilegeContext.Provider value={{ privileges }}>
      {children}
    </PrivilegeContext.Provider>
  );
};
