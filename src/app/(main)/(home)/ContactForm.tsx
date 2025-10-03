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
    contact: "text-6xl font-bold text-orange-500",
    audit:
      "text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400",
  };

  const backgroundClasses = {
    contact: "bg-white/5 backdrop-blur-lg border border-white/10",
    audit: "bg-black/20 backdrop-blur-lg border border-white/5",
  };

  const inputClasses =
    "w-full bg-[#022a52] border border-transparent rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all";

  return (
    <section
      className="relative overflow-hidden pt-24 font-sans"
      style={{ backgroundColor: "#01295C" }}
    >
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-[-50px] z-0 h-48 w-48 rounded-full border-2 border-white/10 opacity-50"></div>
      <div className="absolute bottom-[-100px] left-[20%] z-0 h-64 w-64 rounded-full border-2 border-white/10 opacity-30"></div>

      <Container className="relative z-10">
        <div
          className={cn(
            "relative mb-12 rounded-2xl p-8 md:p-12",
            backgroundClasses[variant],
          )}
        >
          <div className="grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-2">
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <h2 className={cn(titleClasses[variant])}>{title}</h2>
              <p className="max-w-md text-lg text-gray-300">{description}</p>
              {showContactDetails && (
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                    <span className="text-lg">example@teamindifly.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <span className="text-lg">
                      4074 Ebert Summit Suite 375, Lake Leonardchester
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                    <span className="text-lg">+91 90769 33***</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Contact Form */}
            <form className="space-y-6">
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
                className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-lg font-bold text-white transition-opacity hover:opacity-90"
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
