import { SVGProps } from "react";
import { Key } from "@react-types/shared";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type Selection = "all" | "size" | Iterable<Key>;
type Position =
  | string
  | "CustomerCare"
  | "cceo"
  | "sales_lead"
  | "sales_rep"
  | "customer_success";

interface VLiteUser {
  address: string;
  admin: string;
  city: string;
  class: string;
  email: string;
  first_name: string;
  geolocation: string;
  id: string;
  last_name: string;
  otp: null;
  password: string;
  state: string;
  status: string;
  username: string;
}

interface VLiteUserState {
  timestamp: number;
  id: string;
  userData: VLiteUser | null;
}
