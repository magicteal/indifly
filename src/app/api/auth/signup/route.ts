import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = body?.name as string | undefined;
  const email = body?.email as string | undefined;
  const password = body?.password as string | undefined;
  const rememberMe = body?.rememberMe as boolean | undefined;

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Missing name, email, or password" },
      { status: 400 },
    );
  }

  // Delegate to Better Auth to create the account and set cookies
  const resp = await auth.api.signUpEmail({
    body: { name, email, password, rememberMe },
    asResponse: true,
  });
  return resp as Response;
}
