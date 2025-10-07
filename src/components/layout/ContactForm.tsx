"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ServiceTheme } from "@/lib/serviceContext";
import { MapPin } from "lucide-react";
import { usePathname } from "next/navigation"; // Import the hook
import { useEffect, useState } from "react";
import { toast } from "sonner"; // swapped from react-hot-toast to sonner

// The component no longer needs the 'sheetName' prop
interface ContactFormProps {
  theme: ServiceTheme;
}

export const ContactForm = ({ theme }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetName, setSheetName] = useState("");
  const pathname = usePathname(); // Get the current URL path

  // --- Google Apps Script Web App URL ---
  // !! URL has been updated !!
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx8DkkCIwO2UP6fGEPe6xIPo1hFzQ0Q1nCgIrCG0NmdAm8H4PViau-5_pnwfivePSw18A/exec";

  // This useEffect will run whenever the page path changes
  useEffect(() => {
    // 1. Define a mapping from URL paths to Google Sheet names
    const pathSheetMap: { [key: string]: string } = {
      "/": "MainHomeContacts", // Path for app/(main)/home/page.tsx
      "/incore": "IncoreHomeContacts", // Path for app/incore/(home)/page.tsx
      // Add more mappings here for other pages as needed
      // e.g., "/about-us": "AboutPageContacts"
    };

    // 2. Set the sheetName based on the current path
    const currentSheet = pathSheetMap[pathname] || "DefaultContacts"; // Use 'DefaultContacts' as a fallback
    setSheetName(currentSheet);

    console.log(`Current Path: ${pathname}, Target Sheet: ${currentSheet}`);
  }, [pathname]); // It re-runs if the pathname changes

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Check if sheetName has been set
    if (!sheetName) {
      toast.error("Form is not configured correctly. Please refresh the page.");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting your message...");

    const dataToSubmit = new URLSearchParams({
      ...formData,
      sheetName: sheetName, // Use the sheetName from the component's state
    });

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: dataToSubmit,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const result = await response.json();
      if (result.result === "success") {
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(`Error: ${errorMessage}`, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-clip" id="contact">
      <Container className="relative z-10 pt-24">
        <div className="relative rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg sm:p-8 md:p-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h2
                className={`text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl ${theme.text}`}
              >
                Let&apos;s Talk
              </h2>
              <p
                className={`max-w-md text-base ${theme.textForeground} sm:text-lg`}
              >
                Reach out to us with your queries, suggestions and applications.
                We’d be happy to explore the next growth opportunity!
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <MapPin className={`h-5 w-5 sm:h-6 sm:w-6 ${theme.text}`} />
                  <span className={`text-lg ${theme.textForeground}`}>
                    Office No. 706, 7th Floor, TOWER-2, WORLD TRADE CENTER, EON
                    Free Zone, Kharadi, Pune, Maharashtra 411014
                  </span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Input
                name="name"
                type="text"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                name="company"
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
              <Button
                type="submit"
                variant={theme.buttonVariant}
                size={"lg"}
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <div className="absolute top-1/4 left-[-40px] z-0 h-28 w-28 rounded-full border-2 border-white/10 opacity-50 sm:h-40 sm:w-40 md:h-48 md:w-48" />
      <div className="absolute -top-20 -right-10 z-0 hidden h-48 w-48 rounded-full border-2 border-white/10 opacity-30 sm:block md:h-64 md:w-64" />
    </section>
  );
};
