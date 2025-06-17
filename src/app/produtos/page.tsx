import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Produtos",
}

export default function Produtos() {
    return (
        <div>
            <h1>Produtos</h1>

            <p>produto 1</p>
            <p>produto 2</p>
            <p>produto 3</p>
        </div>
    );
}
