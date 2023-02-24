# Data Lovers


## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios mínimos de aceitação do
  projeto](#5-critérios-mínimos-de-aceitação-do-projeto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Pistas, dicas e leituras
  complementares](#8-pistas-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)

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


## 2. História de Usuário Um
(INSERIR FOTO User-story-1)

## 2.1 Definição de Pronto

### Revisão de Design 
Site na web onde todas as informações solicitadas possam ser acessadas pelo usuário de forma prática e intuitiva.

#### Código Completo
Todas as partes do site devem ser funcionais.

### Documentação
Completa e atualizada no Readme incluindo protótios de baixa e alta fidelidade.

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
(INSERIR FOTO low-fidelity-prototype-home)

Inicialmente, em nossas primeiros rascunhos, imaginamos uma tela de boas vindas simples, com menu lateral onde se encontrariam os filtros, e barra de pesquisa no header fixo.

(INSERIR FOTO low-fidelity-prototype-card)

Ao utilizar os filtros para escolher o personagem que deseja visualizar, o usuário seria levado a outra página, onde poderia visualizar primeiro a frente do card de Sapo de Chocolate com nome e foto do personagem e, abaixo, o verso do card, contendo as informações solicitadas: Bruxo/Trouxa, casa de Hogwarts, data de nascimento, gênero e espécie.


## 2.3 Protótipo de Alta Fidelidade
(INSERIR FOTO high-fidelity-prototype-home)

Quando desenvolvemos o nosso protótipo de alta fidelidade, algumas mudanças foram realizadas principalmente porque começamos a considerar ainda mais a experiência do usuário e responsividade. Fez mais sentido que o menu lateral fosse reservado apenas para telas menores, enquanto em telas maiores o menu com os filtros ficaria no header fixo.

(INSERIR FOTO high-fidelity-prototype-filters)

Nos menus acima descritos, o usuário poderia encontrar os filtros, que gerariam uma lista de personagens para que o usuário escolhesse e selecionasse o desejado.

(INSERIR FOTO high-fidelity-prototype-card-front)

Ao selecionar o nome de um personagem, o usuário seria levado a outra página do site, onde, assim como no protótipo de baixa fidelidade, poderia visualizar o card de Sapo de Chocolate com as informações. A diferença aqui é que notamos que o arquivo JSON não continha as fotos dos personagens, visto que os dados foram baseados nos livros, e não nos filmes. Sendo assim, em vez da foto do personagem na frente do card, visualiza-se agora um sapo de chocolate.

(INSERIR FOTO high-fidelity-prototype-card-back)

Outra diferença em relação ao protótipo de baixa fidelidade é que, ao invés de visualizar o verso do card abaixo, agora adicionaríamos o efeito de "flip", para que o usuário possa clicar no card para virá-lo e encontrar as informações desejadas.

(INSERIR FOTO high-fidelity-prototype-cards)

Refletimos então sobre a quantidade de personagens e sobre como, apesar dos filtros, não seria prático para o usuário encontrar alguns personagens, principalmente se ele não soubesse o nome, visto que estamos lidando com 756 personagens. Por isso, mudamos a apresentação dos personagens para apresentar cards menores, conforme apresentado na imagem acima. Também posicionamos os filtros acima dos cards, deixando que os botões do menu sejam destinados apenas para a navegação, para a realização do deslocamento do usuário na página. 

## 2.4 Produto Final
(INSERIR FOTOS E DESCRIÇÕES DO PRODUTO FINAL)


## 3. História de Usuário Dois
## 3.1 Definição de Pronto
## 3.2 Protótipo de Baixa Fidelidade
## 3.3 Protótipo de Alta Fidelidade
## 3.4 Produto Final


## 4. Testes de usabilidade
(COMO OS TESTES FORAM REALIZADOS)

### 4.1 Problemas encontrados
### 4.2 Soluções


## 5. Testes unitários
### 5.1 Problemas encontrados
### 5.2 Soluções


## 6. Responsividade



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


## 8. Considerações Finais
