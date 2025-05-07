// src/store/storage.ts
import { WebStorage } from "redux-persist/es/types";

// Check if localStorage is available (client-side)
const createNoopStorage = (): WebStorage => {
  return {
    getItem: (_key) => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(),
    removeItem: (_key) => Promise.resolve(),
  };
};

const storage: WebStorage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage").default
    : createNoopStorage();

export default storage;
