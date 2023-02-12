import React from "react";
import { cva } from "cva";
// import { clsx } from "clsx";

export type ButtonProps<C extends React.ElementType> = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  as?: C;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<C>;

export const Button = <C extends React.ElementType = "button">({
  variant = "primary",
  size = "md",
  as,
  ...props
}: ButtonProps<C>) => {
  const ElementType = as ?? "button";

  const base = cva("rounded transition-all", {
    variants: {
      variant: {
        primary: "bg-blue-600 hover:bg-blue-800 text-white",
        secondary: "outline outline-blue-600 text-blue-600 hover:bg-blue-200",
        tertiary: "text-blue-600 hover:bg-blue-200",
      },
      size: {
        sm: "text-sm py-1 px-2 font-normal",
        md: "text-base py-2 px-4 font-medium",
        lg: "text-lg py-3 px-6 font-semibold",
      },
    },
    compoundVariants: [{ variant: "secondary", size: "sm", className: "uppercase" }],
    defaultVariants: { variant: "primary", size: "md" },
  });

  return <ElementType className={base({ variant, size })} {...props} />;
};
