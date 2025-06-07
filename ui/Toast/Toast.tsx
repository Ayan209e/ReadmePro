import React, { useState, useEffect } from "react";
import { cn } from "../../core";

type ToastType = "success" | "info" | "warning" | "error";

export const Toast = ({
  message,
  variant = "error",
}: {
  message: string;
  variant?: ToastType;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Auto-hide the toast after some time
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-20 right-0 px-4 py-1 rounded-l-xl text-white/90 backdrop-blur-md shadow-lg transition-all duration-200 ease-out transform",
        isVisible ? "translate-x-0" : "translate-x-full",
        getToastStyles(variant),
      )}
    >
      {message}
    </div>
  );
};

const getToastStyles = (variant: ToastType) => {
  switch (variant) {
    case "success":
      return "bg-green-500";
    case "info":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500 text-gray-900";
    case "error":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
