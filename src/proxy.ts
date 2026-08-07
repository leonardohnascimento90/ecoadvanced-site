import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const previewUser = process.env.SITE_PREVIEW_USER;
  const previewPassword = process.env.SITE_PREVIEW_PASSWORD;

  if (!previewUser || !previewPassword) {
    return NextResponse.next();
  }

  const authorization = request.headers.get("authorization");

  if (authorization?.startsWith("Basic ")) {
    const encodedCredentials = authorization.slice(6);
    const decodedCredentials = atob(encodedCredentials);
    const separatorPosition = decodedCredentials.indexOf(":");

    const username = decodedCredentials.slice(0, separatorPosition);
    const password = decodedCredentials.slice(separatorPosition + 1);

    if (username === previewUser && password === previewPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Acesso restrito à apresentação da EcoAdvanced.", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="EcoAdvanced - Apresentação", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};