"use client";

import Image from "next/image";
import React from "react";

import Container from "@/components/ui/container";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";

type ApproachSectionProps = {
    title?: string;
    brand?: string;
    description?: React.ReactNode;
    imageSrc?: string;
 
};

export default function ApproachSection({
    title = "Our Approach",
    brand = "inSURGE",
    description = (
        <>
            Growth doesn’t happen by chance.
            <br />
            At <span className="font-medium">inSURGE</span>, we break it into clarity, creativity, and consistency.
        </>
    ),
    imageSrc = "/surgeApproch.svg",
}: ApproachSectionProps) {
    return (
        <Container>
            <div
                className="relative rounded-4xl mt-12"
                style={{
                    backgroundImage: "url('/inCore/coreOfferingsBg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* decorative cube */}
                <Cube className="absolute top-40 right-7 scale-30 rotate-12" />

                {/* heading */}
                <div className="relative pt-14 text-center text-2xl font-semibold italic mb-5 md:text-3xl">
                    <span className="mr-12">{title.split(" ")[0] ?? "Our"}</span>
                    <span className="relative text-insurge">
                        {title.split(" ").slice(1).join(" ") || "Approach"}
                        <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
                    </span>
                </div>
                    <div className="mx-auto max-w-4xl text-center px-6 pb-16">
                        <div className="mt-4 text-base text-white/90">{description}</div>

                        <div className="mt-8 flex justify-center">
                            <Image src={imageSrc} alt={`${brand} approach`} width={900} height={360} className="w-full max-w-xl" />
                        </div>
                    </div>
                </div>

        </Container>
    );
}
