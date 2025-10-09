import Container from "@/components/container";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <Container className="prose">{children}</Container>;
}
