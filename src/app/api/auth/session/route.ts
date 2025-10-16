import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const runtime = "nodejs";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  return Response.json(session);
}
