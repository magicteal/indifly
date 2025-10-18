"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import { usePathname } from "next/navigation"; // Import the hook
import { useEffect, useState } from "react";
import { toast } from "sonner"; // swapped from react-hot-toast to sonner

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetName, setSheetName] = useState("");
  const pathname = usePathname(); // Get the current URL path

  // Primary Google Apps Script (multi-sheet) for non-/incore pages
  const PRIMARY_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx8DkkCIwO2UP6fGEPe6xIPo1hFzQ0Q1nCgIrCG0NmdAm8H4PViau-5_pnwfivePSw18A/exec";

  // Dedicated Apps Script for /incore (separate spreadsheet)
  const INCORE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxfY3NBd-pUT-_bdi5xmELWuT_2IIfsD5UbktcUDbnRgp4K2yEcjm257Jhczu3m9RJ8xQ/exec";
  // If incore script still expects a sheet name we supply a constant; harmless if ignored
  const INCORE_SHEET_NAME = "IncoreHomeContacts";

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
    const currentSheet = pathSheetMap[pathname] || "DefaultContacts"; // Use 'DefaultContacts' as a fallback for primary script only
    // Only set sheet for non-/incore paths (incore has its own script + sheet internal)
    if (!pathname.startsWith("/incore")) {
      setSheetName(currentSheet);
    } else {
      setSheetName("");
    }

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
    if (!formData.name || !formData.email || !formData.number) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const isIncoreRoute = pathname.startsWith("/incore");

    // For non-incore routes we still require a sheetName
    if (!isIncoreRoute && !sheetName) {
      toast.error("Form is not configured correctly. Please refresh the page.");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting your message...");

    const params: Record<string, string> = {
      ...formData,
      phone: formData.number, // backward compatibility param
    };
    // Always send a sheetName; primary uses dynamic; incore uses constant (ignored if script doesn't need it)
    params.sheetName = isIncoreRoute ? INCORE_SHEET_NAME : sheetName;
    const dataToSubmit = new URLSearchParams(params);

    try {
      const response = await fetch(
        isIncoreRoute ? INCORE_SCRIPT_URL : PRIMARY_SCRIPT_URL,
        {
          method: "POST",
          body: dataToSubmit,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );

      const rawText = await response.text();
      let parsed: unknown = null;
      try {
        parsed = JSON.parse(rawText);
      } catch {
        // Non-JSON response; we'll fallback to text heuristics
      }

      type ParsedResponse = {
        result?: string;
        status?: string;
        message?: string;
      };
      const isParsedResponse = (val: unknown): val is ParsedResponse =>
        !!val && typeof val === "object";

      // console.debug("ContactForm submission debug", {
      //   route: pathname,
      //   isIncoreRoute,
      //   endpoint: isIncoreRoute ? INCORE_SCRIPT_URL : PRIMARY_SCRIPT_URL,
      //   submittedParams: params,
      //   rawText,
      //   parsed,
      // });

      const success = (() => {
        if (isParsedResponse(parsed)) {
          if (parsed.result === "success" || parsed.status === "success")
            return true;
        }
        return /success/i.test(rawText);
      })();

      if (success) {
        const successMsg =
          isParsedResponse(parsed) && parsed.message
            ? parsed.message
            : "Message sent successfully!";
        toast.success(successMsg, { id: loadingToast });
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          message: "",
        });
      } else {
        const errorMsg =
          isParsedResponse(parsed) && parsed.message
            ? parsed.message
            : "Failed to send message.";
        throw new Error(errorMsg);
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
    <section className="reveal-section relative overflow-clip" id="contact">
      <Container className="relative z-10 pt-24">
        <div className="reveal-section relative rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg sm:p-8 md:p-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
            <div
              className="reveal-left space-y-6 sm:space-y-8"
              data-reveal-stagger
            >
              <h2
                className={`reveal-title text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Let&apos;s Talk
              </h2>
              <p className={`max-w-md text-base sm:text-lg`}>
                Reach out to us with your queries, suggestions and applications.
                We’d be happy to explore the next growth opportunity!
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  <span className="text-lg">
                    Office No. 706, 7th Floor, TOWER-2, WORLD TRADE CENTER, EON
                    Free Zone, Kharadi, Pune, Maharashtra 411014
                  </span>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="reveal-right space-y-3 sm:space-y-4"
              data-reveal-stagger
            >
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
                name="number"
                type="tel"
                placeholder="Phone number *"
                value={formData.number}
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
