import { redirect } from "next/navigation";
import { data } from "../data";

export async function GET(_request: Request, { params }: { params: {id: string }}) {
    if (parseInt(params.id) > data.length) {
        redirect("/names");
    }

    const name = data.find(name => name.id === parseInt(params.id));

    return Response.json(name);
}

export async function PATCH(request: Request, { params }: {params: { id: string}}) {
    const body = await request.json();
    const { text } = body;
    const i = data.findIndex(user => user.id === parseInt(params.id));

    data[i].name = text;

    return Response.json(data[i]);
}

export async function DELETE(_request: Request, { params }: { params: { id: string }}) {
    const i = data.findIndex(user => user.id === parseInt(params.id));

    const deletedUser = data[i];
    data.splice(i, 1);

    return Response.json(deletedUser);
}
