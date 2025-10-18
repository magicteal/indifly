import React from "react";
import { ContactForm } from "../components/ContactForm";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ContactForm />
    </>
  );
}
