import { NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const filteredData = query ? data.filter(name => name.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : data;

    return Response.json(filteredData);
}

export async function POST(request: Request) {
    const requestData = await request.json();

    const newName = {
        id: data.length + 1,
        name: requestData.name,
    }

    data.push(newName);

    return new Response(JSON.stringify(newName), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    });
}
