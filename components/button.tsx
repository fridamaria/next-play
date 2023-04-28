import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx"

type buttonVariant = "regular" | "outline" | "ghost" | "link";
type buttonSize = "small" | "regular" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize
  variant?: buttonVariant
  children: ReactNode
}

// TODO: add variants dropdown, input
// Make icon and grouped pure variants taking in props
// add color options?

export default function Button({
  size = "regular",
  variant = "regular",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(
      "h-fit w-fit rounded-lg text-xs font-medium transition-all",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
      size === "large" && "px-8 py-4 text-base",
      size === "regular" && "px-6 py-3 text-sm",
      size === "small" && "px-4 py-2",
      variant === "regular" &&
        "bg-brand text-white hover:bg-brand-dark disabled:hover:bg-brand",
      variant === "outline" &&
        "border border-brand text-brand hover:border-brand-dark hover:bg-brand-light disabled:border-brand disabled:bg-transparent",
      variant === "ghost" &&
        "text-brand hover:bg-brand-light disabled:hover:bg-transparent",
      variant === "link" && "text-brand hover:underline disabled:no-underline"
    )} {...props}>
      {children}
    </button>
  )
}
