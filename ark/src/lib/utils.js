import { clsx } from "clsx";

export function cn(...inputs) {
  console.log("before", ...inputs);
  const c_str = clsx(inputs);
  console.log("after c", c_str);
  return c_str;
}
