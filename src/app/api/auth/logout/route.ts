import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const runtime = "nodejs";

export async function POST() {
  const resp = await auth.api.signOut({
    asResponse: true,
    headers: await headers(),
  });
  return resp as Response;
}
