import Container from "@/components/container";
import { Footer } from "@/components/layout/Footer";
import { lightTheme } from "@/lib/serviceContext";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="prose mt-36 mb-24">{children}</Container>
      <Footer theme={lightTheme} />
    </>
  );
}
