import { NextRequest, NextResponse } from "next/server";
import aj from "./config/arcjet";


export async function middleware(req: NextRequest) {
  const decision = await aj.protect(req, { requested: 1 }); // Deduct 1 token per request

  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
    }
    if (decision.reason.isBot()) {
      return NextResponse.json({ error: "No bots allowed" }, { status: 403 });
    }
    return NextResponse.json({ error: "Access Denied" }, { status: 403 });
  }

  return NextResponse.next(); // Allow request to proceed
}

// Apply middleware to API routes only
export const config = {
  matcher: "/api/:path*",
};
