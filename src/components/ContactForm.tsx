// src/components/ContactForm.tsx
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactFormProps {
  variant?: "contact" | "audit";
  title: React.ReactNode;
  description: React.ReactNode;
  showContactDetails?: boolean;
}

export const ContactForm = ({
  variant = "contact",
  title,
  description,
  showContactDetails = true,
}: ContactFormProps) => {
  const titleClasses = {
    contact:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500",
    audit:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400",
  };

  const backgroundClasses = {
    contact: "bg-white/5 backdrop-blur-lg border border-white/10",
    audit: "bg-black/20 backdrop-blur-lg border border-white/5",
  };

  const inputClasses =
    "w-full bg-[#022a52] border border-transparent rounded-lg p-3.5 sm:p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm sm:text-base";

  return (
    <section
      className="relative overflow-hidden pt-16 font-sans sm:pt-20 md:pt-24"
      style={{ backgroundColor: "#01295C" }}
      id="contact"
    >
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-[-40px] z-0 h-28 w-28 rounded-full border-2 border-white/10 opacity-50 sm:h-40 sm:w-40 md:h-48 md:w-48"></div>
      <div className="absolute top-2 right-2 z-0 hidden h-48 w-48 rounded-full border-2 border-white/10 opacity-30 sm:block md:h-64 md:w-64"></div>

      <Container className="relative z-10">
        <div
          className={cn(
            "relative mb-12 rounded-2xl p-6 sm:p-8 md:p-12",
            backgroundClasses[variant],
          )}
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
            {/* Left Side: Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className={cn(titleClasses[variant])}>{title}</h2>
              <p className="max-w-md text-base text-gray-300 sm:text-lg">
                {description}
              </p>
              {showContactDetails && (
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />
                    <span className="text-lg">example@teamindifly.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />
                    <span className="text-lg">
                      4074 Ebert Summit Suite 375, Lake Leonardchester
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />
                    <span className="text-lg">+91 90769 33***</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Contact Form */}
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Name *"
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Email *"
                className={inputClasses}
              />
              <input
                type="tel"
                placeholder="Phone number *"
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Company name"
                className={inputClasses}
              />
              <textarea
                placeholder="Message"
                rows={3}
                className={inputClasses}
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90 sm:py-4 sm:text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
