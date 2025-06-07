import React, { PropsWithChildren } from "react";
import { cn } from "../../core";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({
  children,
  className,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 bg-primary text-white whitespace-nowrap  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 h-10 px-4 py-2 min-w-[100px] cursor-pointer disabled:cursor-not-allowed font-semibold text-sm rounded-[10px]",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
