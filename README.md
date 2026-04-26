Shoe Store API - Desafio PTC CITi 26.1
Visão Geral
Este projeto consiste em uma API REST desenvolvida para a digitalização do controle de stock de uma loja de calçados. A solução substitui o antigo método manual por um sistema digital robusto, permitindo o gerenciamento completo (CRUD) de produtos e utilizadores.

Tecnologias Utilizadas
Node.js & TypeScript: Base do desenvolvimento para garantir segurança de tipos e escalabilidade.

Express: Framework para a criação e gestão das rotas da API.

Prisma ORM: Ferramenta para comunicação produtiva com o banco de dados.

PostgreSQL: Banco de dados relacional escolhido pela sua confiabilidade.

Docker: Utilizado para containerizar o banco de dados, garantindo que o ambiente seja idêntico em qualquer máquina.

pnpm: Gerenciador de pacotes rápido e eficiente.

Como Executar o Projeto
Clone o repositório:

Bash
git clone https://github.com/luishbmarques/DEV-DESAFIO.git
cd server
Configure o Ambiente:
Crie um ficheiro .env na pasta server com as seguintes credenciais:

Snippet de código
DATABASE_URL="postgresql://postgres:docker@127.0.0.1:5432/pta?schema=public"
Inicie o Banco de Dados (Docker):

Bash
docker compose up -d
Rode as Migrations:

Bash
pnpm prisma migrate dev
Inicie o Servidor:

Bash
pnpm dev
Rotas da API
Calçados (/calcados)

POST /calcados: Cadastra um novo calçado.

GET /calcados: Lista todos os calçados em stock.

PATCH /calcados/:id: Atualiza informações (preço, quantidade, etc) de um item específico.

DELETE /calcados/:id: Remove um calçado do sistema.

Utilizadores (/users)

GET /users: Lista os utilizadores registados no sistema.

Decisões de Implementação
Arquitetura de Dados: Optei por utilizar IDs do tipo Int com autoincremento para os calçados e UUID para os utilizadores, garantindo unicidade e seguindo as especificações do desafio.

Tipagem Estrita: Todos os campos de valores monetários e tamanhos foram configurados como Int/Float no Prisma para evitar erros de cálculo comuns em manipulação de strings.

Infraestrutura: A escolha pelo Docker com o mapeamento de porta 5432:5432 e o host 127.0.0.1 foi feita para evitar conflitos de rede em ambientes macOS e garantir que o banco estivesse sempre disponível para o Prisma.

Uso de Inteligência Artificial
Seguindo os critérios de transparência do CITi, declaro que utilizei o Gemini como assistente técnico durante o desenvolvimento.

Debugging de Infraestrutura: A IA auxiliou na resolução de erros críticos de conectividade entre o Prisma e o Docker no ambiente macOS (erros P1001 e de binding de porta).

Estruturação de Código: Utilizei a ferramenta para auxiliar na geração da lógica base do CalcadoController.ts e na configuração inicial do schema.prisma.

Revisão Técnica: A IA atuou como revisora, ajudando a identificar erros de sintaxe no TypeScript e na configuração de módulos (@database).

Nota: Toda a lógica gerada foi revisada, testada e validada manualmente através do Thunder Client para garantir o funcionamento do CRUD.