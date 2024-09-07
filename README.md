# Descubra o Brasil - Aplicação de Busca de Estados Brasileiros

Este projeto é uma aplicação web interativa que permite aos usuários pesquisar e obter informações sobre os estados do Brasil, como a capital, população e área territorial.

## Funcionalidades

- **Busca por nome de estados ou por palavras-chave**: A pesquisa aceita tanto o nome completo do estado quanto tags ou partes da descrição, facilitando a busca.
- Exibição de informações detalhadas sobre os estados, como:
  - Capital
  - População
  - Área territorial
- Links para mais informações sobre o estado.
  
## Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização da página (estilos responsivos incluídos).
- **JavaScript**: Lógica de busca, normalização de texto (remoção de acentos) e manipulação de DOM.
- **Google Fonts**: Fonte personalizada `Montserrat` para a estilização do texto.

## Estrutura do Projeto

- **index.html**: Página principal que contém a interface e os elementos de busca.
- **styles/style.css**: Arquivo de estilos principais para a página.
- **styles/responsivo.css**: Estilos adicionais para tornar o layout responsivo.
- **script/dados.js**: Contém os dados dos estados brasileiros (não incluído neste exemplo, mas necessário para a funcionalidade).
- **script/app.js**: Script responsável por realizar a busca e exibir os resultados.

## Funcionalidades de Busca

- A pesquisa pode ser feita tanto pelo nome do estado quanto por palavras-chave relacionadas à sua descrição. Por exemplo, ao buscar por "praias", estados como "Rio de Janeiro" e "Bahia" poderão ser encontrados.
- O sistema também remove acentos automaticamente da busca, permitindo uma experiência mais fluida ao digitar.

## Como Usar

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
