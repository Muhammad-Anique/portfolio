export async function middleware() {
  // console.log("Middleware triggered");
  // const expressServerURL = "http://localhost:8080/api/get-token";
  // try {
  //   console.log('Fetching token from Express server...');
  //   const response = await fetch(expressServerURL);
  //   console.log('Response received:', response);
  //   if (!response.ok) {
  //     console.error('Failed to fetch token');
  //     return NextResponse.redirect(new URL('/error', req.url));
  //   }
  //   const { token } = await response.json();
  //   console.log('Token:', token);
  //   if (!token) {
  //     console.error('Token not found');
  //     return NextResponse.redirect(new URL('/error', req.url));
  //   }
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   const jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split('')
  //       .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
  //       .join('')
  //   );
  //   const decoded = JSON.parse(jsonPayload);
  //   console.log('Decoded payload:', decoded);
  //   if (!decoded || !decoded.role) {
  //     console.error('Role not found in decoded token');
  //     return NextResponse.redirect(new URL('/error', req.url));
  //   }
  //   const responseWithCookie = NextResponse.next();
  //   responseWithCookie.cookies.set('auth_token', token, { path: '/' });
  //   if (decoded.role === "reader") {
  //     console.log("Redirecting to Reader");
  //     return NextResponse.redirect(new URL('/reader', req.url));
  //   } else if (decoded.role === "writer") {
  //     console.log("Redirecting to Writer");
  //     return NextResponse.redirect(new URL('/writer', req.url));
  //   } else {
  //     console.error("Invalid role, redirecting to error page");
  //     return NextResponse.redirect(new URL('/error', req.url));
  //   }
  // } catch (error) {
  //   console.error("Middleware error:", error);
  //   return NextResponse.redirect(new URL('/error', req.url));
  // }
}

export const config = {
  matcher: "/",
};
