import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    const dataCookies = await cookies();
    dataCookies.set("token", "12345678");

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    console.log(dataCookies.get("token"));

    return new Response("<h1>oi</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}
