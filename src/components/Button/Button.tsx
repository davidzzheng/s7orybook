import { cva } from "cva";

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
  const classes = cva("p-4", {
    variants: {
      variant: {
        primary: "bg-blue-500",
        secondary: "bg-slate-100 text-black",
      },
    },
  });
  return (
    <button className={classes({ variant })} {...props}>
      {children}
    </button>
  );
};
