# Sistema de Biblioteca - Assembleia de Deus Jardim Queimados

Este repositório contém o sistema desenvolvido para gerenciar a biblioteca da Assembleia de Deus Jardim Queimados. Abaixo estão descritas suas funcionalidades, estrutura de banco de dados e fluxos principais.

---

## Índice
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
  - [Administração de Livros e Autores](#1-administração-de-livros-e-autores)
  - [Cadastro de Usuários](#2-cadastro-de-usuários)
  - [Gerenciamento de Empréstimos](#3-gerenciamento-de-empréstimos)
- [Modelagem do Banco de Dados](#modelagem-do-banco-de-dados)
- [Fluxo de Operações](#fluxo-de-operações)
- [Considerações Finais](#considerações-finais)

---

## Objetivos

1. Gerenciar o catálogo de livros, autores e suas descrições.
2. Controlar usuários cadastrados na biblioteca.
3. Monitorar os empréstimos de livros, incluindo prazos e devoluções.

---

## Funcionalidades

### 1. Administração de Livros e Autores

- **Administrador**:
  - Inserção de novos livros no sistema.
  - Cadastro de autores e suas respectivas biografias.

**Dados de cada livro**:
- Título
- Sinopse
- Imagem
- Data de publicação
- Quantidade de cópias disponíveis

**Dados de cada autor**:
- Nome
- Pequena biografia

### 2. Cadastro de Usuários

- **Bibliotecário**:
  - Registro de novos usuários que ainda não realizaram empréstimos.

**Dados dos usuários**:
- Nome
- Endereço completo
- Telefone

### 3. Gerenciamento de Empréstimos

- **Bibliotecário**:
  - Registro de novos empréstimos de livros.
  - Registro da devolução de livros.

**Informações registradas durante o empréstimo**:
- Data do empréstimo
- Data prevista de devolução
- Usuário responsável pelo empréstimo
- Livro emprestado

---

## Modelagem do Banco de Dados

### Tabelas

#### **1. `users` (Usuários)**
Guarda informações sobre os usuários cadastrados.

| Campo         | Tipo    | Descrição                        |
|---------------|---------|----------------------------------|
| `name`        | string  | Nome do usuário.                |
| `email`       | string  | Email de contato.               |
| `address_id`  | string  | Chave estrangeira para endereço.|
| `phone`       | string  | Telefone de contato.            |

#### **2. `author` (Autores)**
Armazena informações sobre os autores dos livros.

| Campo         | Tipo    | Descrição                        |
|---------------|---------|----------------------------------|
| `name`        | string  | Nome do autor.                  |
| `bio`         | string  | Biografia do autor.             |

#### **3. `addresses` (Endereços)**
Registra os endereços dos usuários.

| Campo         | Tipo    | Descrição                        |
|---------------|---------|----------------------------------|
| `street`      | string  | Nome da rua.                    |
| `number`      | string  | Número da residência.           |
| `city`        | string  | Cidade.                         |
| `state`       | string  | Estado.                         |

#### **4. `books` (Livros)**
Gerencia o catálogo de livros disponíveis na biblioteca.

| Campo         | Tipo    | Descrição                        |
|---------------|---------|----------------------------------|
| `title`       | string  | Título do livro.                |
| `author_id`   | string  | Chave estrangeira para autor.   |
| `copies`      | number  | Número de cópias disponíveis.   |
| `on_loan`     | number  | Número de cópias emprestadas.   |
| `total_loans` | number  | Número total de empréstimos.    |
| `resume`      | string  | Sinopse do livro.               |

#### **5. `loans` (Empréstimos)**
Registra os empréstimos realizados na biblioteca.

| Campo         | Tipo    | Descrição                        |
|---------------|---------|----------------------------------|
| `user_id`     | string  | Chave estrangeira para usuário. |
| `book_id`     | string  | Chave estrangeira para livro.   |
| `loan_at`     | date    | Data do empréstimo.             |
| `to_return`   | date    | Data prevista para devolução.   |
| `returned`    | bool    | Indicador de devolução.         |

---

## Fluxo de Operações

### Cadastro de Livros e Autores
1. O administrador acessa o sistema.
2. Insere as informações do livro (título, sinopse, autor, imagem, etc.).
3. Registra os autores relacionados com biografia.

### Cadastro de Usuários
1. O bibliotecário acessa o sistema.
2. Insere os dados do usuário, incluindo nome, telefone e endereço.
3. O usuário é salvo no sistema e está habilitado para realizar empréstimos.

### Gerenciamento de Empréstimos
1. O bibliotecário seleciona o usuário e o livro.
2. Registra a data do empréstimo e a data prevista para devolução.
3. Atualiza o status do livro (reduz o número de cópias disponíveis e aumenta o total de empréstimos).
4. Após a devolução, marca o livro como devolvido e atualiza as cópias disponíveis.

---

## Considerações Finais

Este sistema oferece uma base sólida para gerenciar a biblioteca de forma eficiente. Futuras expansões podem incluir:

- Controle de atrasos na devolução de livros.
- Relatórios de uso e estatísticas da biblioteca.
- Notificações para usuários sobre prazos de devolução.

---

> Desenvolvido com ❤️ para a Assembleia de Deus Jardim Queimados.

