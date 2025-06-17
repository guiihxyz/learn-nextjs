import { notFound } from "next/navigation";

interface InfoParams {
    params: {
        id: number;
    }
}

export default function ProdutosInfos({ params }: InfoParams) {
    if (params.id > 1000) {
        notFound();
    }

    if (params.id === 900) {
        throw Error("Invalid id");
    }

    return (
        <div>
            <h1>Informacoes Produto { params.id }</h1>
        </div>
    );
}
