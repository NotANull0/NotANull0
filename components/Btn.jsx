"use client";

import "@/css/btn.scss";

export default function Button({
  children,
  ...props
}) {


  return (
    <button
      {...props}
    >
      {children}
    </button>
  );
}