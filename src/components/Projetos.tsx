"use client";

import "tailwindcss/tailwind.css";

function Projeto(){
    const projetos = [
        { id: 1, img: 'images/projeto.png', title: 'Projeto 1', description: 'Descrição do Projeto 1' },
        { id: 2, img: 'images/projeto.png', title: 'Projeto 2', description: 'Descrição do Projeto 2' },
        { id: 3, img: 'images/projeto.png', title: 'Projeto 3', description: 'Descrição do Projeto 3' },
        { id: 4, img: 'images/projeto.png', title: 'Projeto 4', description: 'Descrição do Projeto 4' },
        { id: 5, img: 'images/projeto.png', title: 'Projeto 5', description: 'Descrição do Projeto 5' },
    ];

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {projetos.map(projeto => (
                    <div key={projeto.id} className="projeto bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={projeto.img} alt={projeto.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{projeto.title}</h2>
                            <p className="text-gray-700">{projeto.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}
export default Projeto;