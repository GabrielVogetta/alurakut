import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response){
    
    if(request.method === 'POST'){
        const TOKEN = "24d7a96cea1421831af782ed1d5964";

        const client = new SiteClient(TOKEN);

        // validar dados antes de sair cadastrando 

        const record = await client.items.create({
            itemType: "1152427", // id do model
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/GabrielVogetta.png",
            // link: "https://github.com/GabrielVogetta",
            // creatorSlug: "GabrielVogetta"
        })

        response.json({
            dados: "Algum dado qualquer",
            record: record,
        })
        
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas temos no POST'
    })
}