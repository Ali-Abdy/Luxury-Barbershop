import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isBarberRoute = pathname.startsWith("/barber");

  if (!session && (isAdminRoute || isBarberRoute || pathname.startsWith("/booking"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdminRoute && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isBarberRoute && session?.user?.role !== "BARBER" && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/barber/:path*", "/login", "/register", "/booking/:path*"],
};

