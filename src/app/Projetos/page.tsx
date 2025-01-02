"use client";

import Nav from "@/components/Nav";
import Projeto from "@/components/Projetos";

function Projetos() {
    return (
        <div>
        <header>
            <Nav />
        </header>
        <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Galeria de Projetos</h1>
                <Projeto />
            </div>
        </div>
    );
};

export default Projetos;