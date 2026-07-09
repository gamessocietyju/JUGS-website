import React from "react";
import CustomCursor from "./CustomCursor";

interface InteractionProviderProps {
  children: React.ReactNode;
}

export default function InteractionProvider({ children }: InteractionProviderProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
