// import { clsx } from "clsx";
import { twMerge, twJoin } from "tailwind-merge";

export function cn(...inputs) {
  console.log("before", ...inputs);
  // const c_str = clsx(inputs);
  const c_str = twJoin(inputs);
  const m_str = twMerge(c_str);
  console.log("after c", c_str);
  console.log("after m", m_str);
  return c_str;
}
