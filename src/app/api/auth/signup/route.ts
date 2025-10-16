import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // Optional access gate for signup. Provide accessCode in the request body.
  // If SIGNUP_ACCESS_CODE is set (always enforced in production), the provided code must match.
  const providedCode = body?.accessCode as string | undefined;
  const requiredCode = process.env.SIGNUP_ACCESS_CODE;
  const isProd = process.env.NODE_ENV === "production";

  // Enforce in production always. In development, enforce only if env is set.
  if (isProd || requiredCode) {
    if (!requiredCode) {
      return NextResponse.json(
        { error: "Signup disabled. Missing access code configuration." },
        { status: 503 },
      );
    }
    if (!providedCode || providedCode !== requiredCode) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
  }
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
