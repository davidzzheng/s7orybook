import { cva } from "cva";

import { clsx } from "clsx";

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { variant, children } = props;
  const base = cva("px-4 py-2 rounded text-sm font-medium", {
    variants: {
      variant: {
        primary: "bg-blue-500",
        secondary: "bg-slate-100 text-black",
      },
    },
  });

  return (
    <button className={clsx(base({ variant }))} {...props}>
      {children}
    </button>
  );
};
