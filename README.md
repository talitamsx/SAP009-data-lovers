# Data Lovers


## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. História de Usuário Um](#2-história-de-usuário-um)
* [3. História de Usuário Dois](#3-história-de-usuário-dois)
* [4. Testes de usabilidade](#4-testes-de-usabilidade)
* [5. Testes unitários](#5-testes-unitários)
* [6. Responsividade](#6-responsividade)
* [7. Considerações técnicas](#7-considerações-técnicas)


***

## 1. Resumo do projeto

Neste projeto **construímos uma _página web_ para visualizar um _conjunto
(set) de dados_** sobre o universo Harry Potter.

Seu nome, Chocolate Frog, deriva dos cards de Sapo de chocolate que as crianças bruxas nos livros de Harry Potter adoram colecionar. São cartões que apresentam informações sobre bruxos famosos. Nossa proposta é apresentar as informações sobre os personagens dos livros com a mesma estética: em cards de Sapo de Chocolate!

Este produto é destinado a fãs do Universo Harry Potter, que desejem ter
acesso a informações, como personagens, livros, casas, feitiços, etc.
Tanto para informar/confirmar estatisticas e descobrir ainda mais sobre
essa saga que faz tanto sucesso.  

Como entregável final terá uma página web que permita **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**. Por cálculo agregado
nos referimos aos diversos cálculos que podem ser feitos com os dados para
mostrar a informação mais relevante para os usuários (médias, valores máximos e
mínimos, etc).

## 1.1 Link de acesso ao produto
https://talitamsx.github.io/SAP009-data-lovers/src/


## 2. História de Usuário Um
![INSERIR FOTO User-story-1](https://github.com/talitamsx/SAP009-data-lovers/raw/main/src/githubImgs/User-story-1.png)

## 2.1 Definição de Pronto

### Revisão de Design 
Site na web onde todas as informações solicitadas possam ser acessadas pelo usuário de forma prática e intuitiva.

#### Código Completo
Todas as partes do site devem ser funcionais.

### Documentação
Completa e atualizada no Readme incluindo protótipos de baixa e alta fidelidade.

### Testes unitários
Devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`.

### Teste de usabilidade
Testes com usuários reais.
Usuários preencherão forms sobre a navegação do site.

### Responsividade
Adaptável a todas telas, é possível acessar em todas as plataformas digitais.


## 2.2 Protótipo de Baixa Fidelidade
![INSERIR FOTO low-fidelity-prototype-home](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/low-fidelity-prototype-home.jpeg)

Inicialmente, em nossas primeiros rascunhos, imaginamos uma tela de boas vindas simples, com menu lateral onde se encontrariam os filtros, e barra de pesquisa no header fixo.

![INSERIR FOTO low-fidelity-prototype-card](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/low-fidelity-prototype-card.jpeg)

Ao utilizar os filtros para escolher o personagem que deseja visualizar, o usuário seria levado a outra página, onde poderia visualizar primeiro a frente do card de Sapo de Chocolate com nome e foto do personagem e, abaixo, o verso do card, contendo as informações solicitadas: Bruxo/Trouxa, casa de Hogwarts, data de nascimento, gênero e espécie.


## 2.3 Protótipo de Alta Fidelidade
![INSERIR FOTO high-fidelity-prototype-home](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/high-fidelity-prototype-home.png)

Quando desenvolvemos o nosso protótipo de alta fidelidade, algumas mudanças foram realizadas principalmente porque começamos a considerar ainda mais a experiência do usuário e responsividade. Fez mais sentido que o menu lateral fosse reservado apenas para telas menores, enquanto em telas maiores o menu com os filtros ficaria no header fixo.

![INSERIR FOTO high-fidelity-prototype-filters](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/high-fidelity-prototype-filters.png)

Nos menus acima descritos, o usuário poderia encontrar os filtros, que gerariam uma lista de personagens para que o usuário escolhesse e selecionasse o desejado.

![INSERIR FOTO high-fidelity-prototype-card-front](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/high-fidelity-prototype-card-front.png)

Ao selecionar o nome de um personagem, o usuário seria levado a outra página do site, onde, assim como no protótipo de baixa fidelidade, poderia visualizar o card de Sapo de Chocolate com as informações. A diferença aqui é que notamos que o arquivo JSON não continha as fotos dos personagens, visto que os dados foram baseados nos livros, e não nos filmes. Sendo assim, em vez da foto do personagem na frente do card, visualiza-se agora um sapo de chocolate.

![INSERIR FOTO high-fidelity-prototype-card-back](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/high-fidelity-prototype-card-back.png)

Outra diferença em relação ao protótipo de baixa fidelidade é que, ao invés de visualizar o verso do card abaixo, agora adicionaríamos o efeito de "flip", para que o usuário possa clicar no card para virá-lo e encontrar as informações desejadas.

![INSERIR FOTO high-fidelity-prototype-cards](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/high-fidelity-prototype-cards.png)

Refletimos então sobre a quantidade de personagens e sobre como, apesar dos filtros, não seria prático para o usuário encontrar alguns personagens, principalmente se ele não soubesse o nome, visto que estamos lidando com 756 personagens. Por isso, mudamos a apresentação dos personagens para apresentar cards menores, conforme apresentado na imagem acima. Também posicionamos os filtros acima dos cards, deixando que os botões do menu sejam destinados apenas para a navegação, para a realização do deslocamento do usuário na página. 


## 3. História de Usuário Dois
![User Story 2](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/User-story-2.png)

## 3.1 Definição de Pronto
### Revisão de Design 
Site na web onde todas as informações solicitadas possam ser acessadas pelo usuário de forma prática e intuitiva.

#### Código Completo
Todas as partes do site devem ser funcionais.

### Documentação
Completa e atualizada no Readme incluindo protótipos de baixa e alta fidelidade.

### Testes unitários
Devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`.

### Teste de usabilidade
Testes com usuários reais.
Usuários preencherão forms sobre a navegação do site.

### Responsividade
Adaptável a todas telas, é possível acessar em todas as plataformas digitais.

## 3.2 Protótipo de Baixa Fidelidade
![Houses Prototype](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/low-fidelity-prototype-house.jpeg)

Pensamos esta como uma página simples, com textos informativos sobre as características de cada casa de Hogwarts e cáculos informando a quantidade de personagens pertencentes a cada casa.


## 4. Testes de usabilidade
Os testes de usabilidade foram realizados com usuários reais, que tiveram a experiência de acessar o site e explorá-lo, buscando informações sobre as casas e os personagens de seu interesse. Após isso, os usuários preencheram um formulário onde relataram seu ponto de vista e ofereceram sugestões de melhorias. 

### 4.1 Problemas encontrados
Um dos principais problemas apontados pelos usuários é o tempo que a página leva para carregar todos os cards. Isso acontece devido ao método que escolhemos para desenhar os cards, o que leva tempo. Por conta disso, a cada vez que o usuário seleciona um filtro, todos os cards precisam ser redesenhados. Um outro problema acusado foi o fato de que no navegador Firefox as configurações do efeito de "flip" não funcionam e os cards são apresentados de forma irregular. 

## 5. Testes unitários
![unit-test](https://github.com/talitamsx/SAP009-data-lovers/blob/main/src/githubImgs/unit-test.jpeg)
Os testes unitários cobriram um total de 100% de statements, branches, functions e lines.


## 6. Responsividade
Toda a plataforma possui responsividade total em qualquer dispositivo.


## 7. Considerações técnicas

A lógica do projeto está implementada somente em JavaScript (ES6), HTML e
CSS. Neste projeto não foi feito uso de bibliotecas e frameworks, apenas
[vanilla
JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (de acordo com o data que forem trabalhar)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  |  └── harrypotter
|  |  |  ├── data.js
|  |  |  ├── harry.json
|  |  |  └── README.md

|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

