// middleware.ts
import { NextResponse } from "next/server";
import { jwtVerify, type JWTPayload } from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");
  const { payload } = await jwtVerify(token, secret);
  console.log(payload);

  if (typeof payload === "string") {
    request.nextUrl.pathname = "/auth/signin";
    return NextResponse.redirect(request.nextUrl);
  }

  request.user = payload;
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // "/api/users/:path*",
    // "/api/agencies/:path*",
    "/api/bookings/:path*",
    "/api/brands/:path*",
    "/api/carmodels/:path*",
    // "/api/cars/:path*",
    "/api/catgories/:path*",
  ],
};
