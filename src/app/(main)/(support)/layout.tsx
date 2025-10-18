import Container from "@/components/container";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="prose mt-36 mb-24 prose-h2:text-primary prose-p:text-justify prose-ol:text-justify prose-ul:text-justify">
        {children}
      </Container>
    </>
  );
}
