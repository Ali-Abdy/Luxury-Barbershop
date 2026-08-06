import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

  if (!session && (isAdminRoute || pathname.startsWith("/booking"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdminRoute && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register", "/booking/:path*"],
};
