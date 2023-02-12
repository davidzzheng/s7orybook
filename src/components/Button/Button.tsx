import { cva } from "cva";
import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = (props: ButtonProps) => {
  const { variant = "primary", size = "md" } = props;

  const base = cva("rounded transition-all", {
    variants: {
      variant: {
        primary: "bg-blue-400 hover:bg-blue-600 text-white",
        secondary: "outline outline-blue-400 text-black hover:bg-blue-200",
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

  return <button {...props} className={clsx(base({ variant, size }))} />;
};
