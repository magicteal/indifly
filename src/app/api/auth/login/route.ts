import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();
  const email = body?.email as string | undefined;
  const password = body?.password as string | undefined;
  if (!email || !password)
    return NextResponse.json(
      { error: "Missing email/password" },
      { status: 400 },
    );

  // Delegate to Better Auth server with a Response that includes cookies
  const resp = await auth.api.signInEmail({
    body: { email, password },
    asResponse: true,
  });
  return resp as Response;
}
