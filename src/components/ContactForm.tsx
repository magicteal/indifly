// src/components/ContactForm.tsx
import { Container } from "@/components/ui/container";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
  return (
    <section className="relative" id="contact">
      <Container className="relative z-10">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:p-8 md:p-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
            {/* Left Side: Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s Talk
              </h2>
              <p className="max-w-md text-base text-gray-300 sm:text-lg">
                Reach out to us with your queries, suggestions and applications.
                We’d be happy to explore the next growth opportunity!
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />
                  <span className="text-lg">
                    4074 Ebert Summit Suite 375
                    <br />
                    Lake Leonardchester
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form className="space-y-3 sm:space-y-4">
              <Input type="text" placeholder="Name *" />
              <Input type="email" placeholder="Email *" />
              <Input type="tel" placeholder="Phone number *" />
              <Input type="text" placeholder="Company name" />
              <Textarea placeholder="Message" rows={3}></Textarea>
              <Button
                type="submit"
                variant="default"
                size={"lg"}
                className="w-full"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-[-40px] z-0 h-28 w-28 rounded-full border-2 border-white/10 opacity-50 sm:h-40 sm:w-40 md:h-48 md:w-48" />
      <div className="absolute -top-20 -right-10 z-0 hidden h-48 w-48 rounded-full border-2 border-white/10 opacity-30 sm:block md:h-64 md:w-64" />
    </section>
  );
};
