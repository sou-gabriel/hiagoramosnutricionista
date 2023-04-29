import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild: boolean;
};

export function Button({ asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className="block px-8 py-4 text-base font-bold text-black uppercase bg-white rounded-lg w-full max-w-[277px]"
      {...props}
    />
  );
}
