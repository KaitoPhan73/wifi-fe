import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/admin"];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken && privatePaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (accessToken && authPaths.some((path) => pathname.startsWith(path))) {
    console.log("redirecting to voucher groups");
    return NextResponse.redirect(new URL("/admin/voucher-groups", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/admin/:path*"],
};
