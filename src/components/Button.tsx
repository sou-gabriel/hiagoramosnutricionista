import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  asChild?: boolean;
};

export function Button({
  variant = "primary",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "flex w-full max-w-[316px] border border-transparent transition items-center justify-center rounded-lg py-4 text-base font-bold uppercase",
        {
          "bg-white shadow-xl text-black px-8 hover:bg-black hover:text-white hover:border-white": variant === "primary",
          "bg-black text-white hover:text-black hover:bg-white hover:border-black": variant === "secondary",
        }
      )}
      {...props}
    />
  );
}
