"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";

type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
};

export function ProfileCard({
  name,
  role,
  imageUrl,
  linkedin,
}: ProfileCardProps) {
  const hasLinkedin = !!linkedin && linkedin.trim() !== "";
  return (
    <Card className="w-[260px] overflow-hidden rounded-xl border border-gray-600 bg-transparent shadow-none">
      {/* Top image */}
      <div className="relative h-[240px] w-full">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <CardContent className="py-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <div className="mt-3 flex items-center justify-center">
          {hasLinkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${name}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
            >
              <IoLogoLinkedin size={20} />
            </a>
          ) : (
            <span
              aria-label={`LinkedIn profile not available for ${name}`}
              className="inline-flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]"
            >
              <IoLogoLinkedin size={20} />
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-4" />
    </Card>
  );
}
