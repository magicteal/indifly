"use client";

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
  return (
    <div className="w-full text-center">
      {/* Avatar */}
      <div className="relative mx-auto aspect-square w-full">
        {/* Circular photo */}
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-[#1B1B1F]">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <div className="mt-3 flex items-center justify-center">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${name}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
          >
            <IoLogoLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
