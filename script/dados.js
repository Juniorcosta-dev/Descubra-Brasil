const estadosBrasil = [
    {
      estado: "Acre",
      descricao: "Estado da Região Norte, conhecido por sua floresta amazônica e rica biodiversidade. Faz fronteira com o Peru e a Bolívia, sendo uma das entradas para a Amazônia ocidental. É famoso por sua história ligada à exploração da borracha e pelo Parque Nacional da Serra do Divisor.",
      capital: "Rio Branco",
      populacao: "906.876 hab",
      area: "164.123 km²",
      link: "https://pt.wikipedia.org/wiki/Acre"
    },
    {
      estado: "Alagoas",
      descricao: "Localizado na Região Nordeste, Alagoas é conhecido por suas praias paradisíacas, como a Praia do Francês e Maragogi, além de seus importantes rios e lagoas. O estado tem uma forte cultura folclórica e histórica, com destaque para sua rica tradição afro-brasileira.",
      capital: "Maceió",
      populacao: "3.365.351 hab",
      area: "27.767 km²",
      link: "https://pt.wikipedia.org/wiki/Alagoas"
    },
    {
      estado: "Amapá",
      descricao: "Situado na Região Norte, o Amapá é um estado que faz fronteira com a Guiana Francesa e tem em seu território a floresta amazônica. Conhecido pelo Marco Zero do Equador e pela Fortaleza de São José de Macapá, é um estado com grande potencial turístico e riquezas naturais.",
      capital: "Macapá",
      populacao: "877.613 hab",
      area: "142.828 km²",
      link: "https://pt.wikipedia.org/wiki/Amapá"
    },
    {
      estado: "Amazonas",
      descricao: "O maior estado do Brasil em área territorial, localizado na Região Norte. É famoso por abrigar a maior parte da Floresta Amazônica e o rio de mesmo nome, um dos maiores do mundo. Sua biodiversidade é incomparável e Manaus, sua capital, é um polo industrial e turístico.",
      capital: "Manaus",
      populacao: "4.269.995 hab",
      area: "1.559.161 km²",
      link: "https://pt.wikipedia.org/wiki/Amazonas"
    },
    {
      estado: "Bahia",
      descricao: "Localizado na Região Nordeste, a Bahia é um dos estados mais ricos culturalmente do Brasil. Berço do samba, do carnaval e de diversas manifestações culturais afro-brasileiras, possui uma costa extensa com belíssimas praias e rica história, destacando-se por Salvador, a primeira capital do Brasil.",
      capital: "Salvador",
      populacao: "15.126.371 hab",
      area: "564.733 km²",
      link: "https://pt.wikipedia.org/wiki/Bahia"
    },
    {
      estado: "Ceará",
      descricao: "O Ceará é um estado nordestino conhecido por suas paisagens deslumbrantes de praias e sertão. Suas principais atrações incluem a Praia de Jericoacoara, as falésias de Canoa Quebrada e a vibrante capital Fortaleza. A economia do estado gira em torno do turismo e da indústria têxtil.",
      capital: "Fortaleza",
      populacao: "9.240.580 hab",
      area: "148.920 km²",
      link: "https://pt.wikipedia.org/wiki/Ceará"
    },
    {
      estado: "Distrito Federal",
      descricao: "O Distrito Federal é a unidade federativa onde se encontra a capital do Brasil, Brasília, planejada por Lúcio Costa e com arquitetura de Oscar Niemeyer. Sede dos três poderes do governo federal, é um importante centro político e econômico, além de ser patrimônio cultural da humanidade pela UNESCO.",
      capital: "Brasília",
      populacao: "3.094.325 hab",
      area: "5.802 km²",
      link: "https://pt.wikipedia.org/wiki/Distrito_Federal_(Brasil)"
    },
    {
      estado: "Espírito Santo",
      descricao: "Localizado na Região Sudeste, o Espírito Santo é um estado com belas praias e montanhas, além de ser um importante exportador de minério de ferro. Sua economia está em crescimento e a capital Vitória é conhecida pela qualidade de vida e pelas paisagens naturais de grande beleza.",
      capital: "Vitória",
      populacao: "4.064.052 hab",
      area: "46.074 km²",
      link: "https://pt.wikipedia.org/wiki/Espírito_Santo_(estado)"
    },
    {
      estado: "Goiás",
      descricao: "Goiás é um estado do Centro-Oeste brasileiro conhecido por sua rica agricultura e pecuária. O estado também abriga o Parque Nacional da Chapada dos Veadeiros, um destino popular entre os ecoturistas. Sua capital, Goiânia, é uma cidade planejada com grandes áreas verdes.",
      capital: "Goiânia",
      populacao: "7.213.560 hab",
      area: "340.086 km²",
      link: "https://pt.wikipedia.org/wiki/Goiás"
    },
    {
      estado: "Maranhão",
      descricao: "Maranhão, localizado no Nordeste, é conhecido pelos Lençóis Maranhenses, um dos principais destinos turísticos do Brasil. O estado possui uma rica herança cultural, com influências indígenas, africanas e europeias, especialmente em São Luís, sua capital, que é patrimônio mundial da UNESCO.",
      capital: "São Luís",
      populacao: "7.249.165 hab",
      area: "331.937 km²",
      link: "https://pt.wikipedia.org/wiki/Maranhão"
    },
    {
      estado: "Mato Grosso",
      descricao: "Situado na Região Centro-Oeste, Mato Grosso é um estado com grandes áreas de biodiversidade, como o Pantanal e a Floresta Amazônica. O estado tem forte agricultura, com destaque para o cultivo de soja e milho. Sua capital, Cuiabá, é um centro urbano importante para o agronegócio.",
      capital: "Cuiabá",
      populacao: "3.567.234 hab",
      area: "903.357 km²",
      link: "https://pt.wikipedia.org/wiki/Mato_Grosso"
    },
    {
      estado: "Mato Grosso do Sul",
      descricao: "Também localizado no Centro-Oeste, Mato Grosso do Sul é famoso pelo Pantanal, a maior planície alagada do mundo, e pela Serra da Bodoquena. O estado é um destino turístico para amantes da natureza e da vida selvagem. Sua capital, Campo Grande, é conhecida como Cidade Morena devido à cor de sua terra.",
      capital: "Campo Grande",
      populacao: "2.839.188 hab",
      area: "357.125 km²",
      link: "https://pt.wikipedia.org/wiki/Mato_Grosso_do_Sul"
    },
    {
      estado: "Minas Gerais",
      descricao: "Minas Gerais é um dos maiores e mais populosos estados do Brasil, conhecido por suas cidades históricas como Ouro Preto e Tiradentes, que preservam a arquitetura do período colonial. O estado é famoso por sua culinária, especialmente o pão de queijo, e por ser um grande produtor de café.",
      capital: "Belo Horizonte",
      populacao: "21.411.923 hab",
      area: "586.528 km²",
      link: "https://pt.wikipedia.org/wiki/Minas_Gerais"
    },
    {
      estado: "Pará",
      descricao: "Localizado na Região Norte, o Pará é o segundo maior estado do Brasil em área. Abriga parte da Floresta Amazônica e é um dos principais exportadores de recursos minerais do país. O estado é conhecido por sua cultura rica e diversificada, incluindo o Círio de Nazaré, uma das maiores festas religiosas do Brasil.",
      capital: "Belém",
      populacao: "8.690.745 hab",
      area: "1.247.689 km²",
      link: "https://pt.wikipedia.org/wiki/Pará"
    },
    {
      estado: "Paraíba",
      descricao: "Situado na Região Nordeste, a Paraíba é um estado com belíssimas praias, como as de João Pessoa, sua capital, que é considerada uma das cidades mais verdes do mundo. O estado também é conhecido pelo seu rico folclore, especialmente as festas juninas e a cultura sertaneja.",
      capital: "João Pessoa",
      populacao: "4.059.905 hab",
      area: "56.469 km²",
      link: "https://pt.wikipedia.org/wiki/Paraíba"
    },
    {
      estado: "Paraná",
      descricao: "Paraná, situado na Região Sul, é conhecido pelas Cataratas do Iguaçu, uma das sete maravilhas naturais do mundo. O estado tem uma economia diversificada, que inclui agricultura, indústria e turismo. Curitiba, sua capital, é famosa por seu planejamento urbano e qualidade de vida.",
      capital: "Curitiba",
      populacao: "11.597.484 hab",
      area: "199.314 km²",
      link: "https://pt.wikipedia.org/wiki/Paraná"
    },
    {
      estado: "Pernambuco",
      descricao: "Localizado no Nordeste, Pernambuco é famoso por sua rica cultura, especialmente o frevo e o maracatu. Recife, a capital, é conhecida como a 'Veneza brasileira' por seus rios e pontes. O estado também é lar de Olinda, um centro histórico tombado como Patrimônio Mundial pela UNESCO.",
      capital: "Recife",
      populacao: "9.674.793 hab",
      area: "98.311 km²",
      link: "https://pt.wikipedia.org/wiki/Pernambuco"
    },
    {
      estado: "Piauí",
      descricao: "O Piauí, localizado na Região Nordeste, tem uma pequena faixa de litoral, mas é conhecido principalmente pelo Parque Nacional da Serra da Capivara, que possui um dos mais antigos sítios arqueológicos das Américas. A capital, Teresina, é a única do Nordeste que não fica no litoral.",
      capital: "Teresina",
      populacao: "3.296.140 hab",
      area: "251.529 km²",
      link: "https://pt.wikipedia.org/wiki/Piauí"
    },
    {
      estado: "Rio de Janeiro",
      descricao: "O estado do Rio de Janeiro, localizado na Região Sudeste, é um dos destinos turísticos mais famosos do mundo, com atrações como o Cristo Redentor e as praias de Copacabana e Ipanema. A capital, Rio de Janeiro, é conhecida por seu carnaval, samba e belas paisagens.",
      capital: "Rio de Janeiro",
      populacao: "17.463.349 hab",
      area: "43.696 km²",
      link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)"
    },
    {
      estado: "Rio Grande do Norte",
      descricao: "Localizado no Nordeste, o Rio Grande do Norte é famoso por suas belas praias, como Ponta Negra e Genipabu. A capital, Natal, é conhecida como a 'Cidade do Sol' devido ao seu clima ensolarado durante a maior parte do ano, sendo um destino turístico muito procurado.",
      capital: "Natal",
      populacao: "3.560.903 hab",
      area: "52.811 km²",
      link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte"
    },
    {
      estado: "Rio Grande do Sul",
      descricao: "O Rio Grande do Sul, localizado na Região Sul, é conhecido por sua forte tradição gaúcha e cultural europeia, especialmente a influência alemã e italiana. Porto Alegre, a capital, é um importante centro econômico, e o estado também se destaca na produção agrícola e vinícola.",
      capital: "Porto Alegre",
      populacao: "11.466.630 hab",
      area: "281.748 km²",
      link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul"
    },
    {
      estado: "Rondônia",
      descricao: "Rondônia, localizado na Região Norte, é um estado com grande diversidade ambiental, sendo parcialmente coberto pela Floresta Amazônica. A economia do estado é fortemente baseada na agricultura e pecuária, e a capital, Porto Velho, é um importante centro logístico para a região.",
      capital: "Porto Velho",
      populacao: "1.815.278 hab",
      area: "237.765 km²",
      link: "https://pt.wikipedia.org/wiki/Rondônia"
    },
    {
      estado: "Roraima",
      descricao: "O estado de Roraima, situado na Região Norte, faz fronteira com a Venezuela e a Guiana. Boa Vista, a capital, é a única capital brasileira totalmente localizada ao norte da linha do Equador. O Monte Roraima, uma das montanhas mais antigas do mundo, é um destaque turístico.",
      capital: "Boa Vista",
      populacao: "652.713 hab",
      area: "224.301 km²",
      link: "https://pt.wikipedia.org/wiki/Roraima"
    },
    {
      estado: "Santa Catarina",
      descricao: "Santa Catarina, na Região Sul, é conhecido por sua diversidade cultural, com influências alemãs, italianas e portuguesas. O estado também é famoso por suas praias, como as de Florianópolis, e por destinos de inverno como São Joaquim. A economia é diversificada, com destaque para o turismo e a indústria.",
      capital: "Florianópolis",
      populacao: "7.577.576 hab",
      area: "95.730 km²",
      link: "https://pt.wikipedia.org/wiki/Santa_Catarina"
    },
    {
      estado: "São Paulo",
      descricao: "O estado de São Paulo, localizado na Região Sudeste, é o centro econômico e industrial do Brasil. A capital, São Paulo, é a maior cidade do país e uma das maiores metrópoles do mundo. O estado também tem uma forte tradição cultural e acadêmica, além de ser o maior produtor agrícola do Brasil.",
      capital: "São Paulo",
      populacao: "46.649.132 hab",
      area: "248.209 km²",
      link: "https://pt.wikipedia.org/wiki/São_Paulo_(estado)"
    },
    {
      estado: "Sergipe",
      descricao: "O menor estado do Brasil, Sergipe está localizado na Região Nordeste e é conhecido por suas belas praias e pelo Rio São Francisco. A capital, Aracaju, é uma cidade tranquila com alto índice de qualidade de vida, e o estado tem uma economia baseada principalmente na agricultura e pecuária.",
      capital: "Aracaju",
      populacao: "2.338.474 hab",
      area: "21.918 km²",
      link: "https://pt.wikipedia.org/wiki/Sergipe"
    },
    {
      estado: "Tocantins",
      descricao: "Tocantins, localizado na Região Norte, é um dos estados mais novos do Brasil, criado em 1988. Sua capital, Palmas, é uma cidade planejada e moderna. O estado é conhecido por suas belezas naturais, como o Jalapão, um destino de ecoturismo muito procurado por amantes da natureza.",
      capital: "Palmas",
      populacao: "1.607.363 hab",
      area: "277.620 km²",
      link: "https://pt.wikipedia.org/wiki/Tocantins"
    }
  ];
  