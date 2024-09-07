function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}



function buscarEstados() {
    let sectionResultado = document.getElementById("resultados-pesquisa");

    let campoBuscar = document.getElementById("buscar").value

    if (!campoBuscar) {
        sectionResultado.innerHTML = "<p>Nenhum estado foi encontrado, digite um estado brasileiro."
        return
    }
    
    campoBuscar =removerAcentos(campoBuscar.toLowerCase());

    let resultado = "";
    let estado = "";
    let descricao = "";


    for (let estados of estadosBrasil) {

        estado = removerAcentos(estados.estado.toLowerCase());
        descricao = removerAcentos(estados.descricao.toLowerCase());

        if (estado.includes(campoBuscar) || descricao.includes(campoBuscar)) {
            resultado += `
            <div class="item-resultado">
                <h2>Estado: ${estados.estado}</h2>
                <p>${estados.descricao}</p>
                <div class="card-info">
                    <p class="info-estado">Capital: ${estados.capital}</p>
                    <p class="info-estado">População: ${estados.populacao}</p>
                    <p class="info-estado">Área: ${estados.area}</p>
                </div>
                <a href="${estados.link}" target="_blank">Mais informações</a>
            </div>
        
        `;
        }

        
    };
    
    if (!resultado) {
        resultado = "<p> Não foi encontrado nenhum estado brasileiro.</p>"
    }

    sectionResultado.innerHTML = resultado;
}



