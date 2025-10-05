"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

export function ProfileCard({ name, role, imageUrl }: ProfileCardProps) {
  return (
  <Card className="w-[260px] rounded-xl overflow-hidden bg-transparent border border-gray-600 shadow-none">
      {/* Top image */}
      <div className="relative w-full h-[240px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <CardContent className="text-center py-4">
        <p className="text-sm text-muted-foreground">{role}</p>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </CardContent>

      {/* Footer (small accent dot like in your design) */}
      <CardFooter className="flex justify-center pb-4">
        <div className="w-5 h-5 rounded-md bg-gray-200/40" />
      </CardFooter>
    </Card>
  );
}
