# 🔴 Pokedex TypeScript Lite

Uma aplicação CLI minimalista de Pokédex desenvolvida em **TypeScript** que integra-se com a **PokéAPI** para gerenciar um catálogo/box de Pokémons.

> Miniprojeto sugerido pelo curso **SCTEC Dev Backend Node.js**

# Link do KANBAN no Trello https://trello.com/invite/b/6a19af27892922e9baaed15c/ATTI801199e14add3a57160f9392dec4f4b6C4FD7CAA/pokedex-typescript-lite
---

## 📋 Tabela de Conteúdo

- [Features](#features)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitetura](#arquitetura)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Exemplos de Uso](#exemplos-de-uso)
- [Validações](#validações)
- [Tratamento de Erros](#tratamento-de-erros)
- [Licença](#licença)

---

## ✨ Features

- ✅ **Busca de Pokémons** - Consulta a PokéAPI para obter dados em tempo real
- ✅ **Gerenciamento de Catálogo** - Adiciona, remove e lista Pokémons
- ✅ **Prevenção de Duplicatas** - Evita adicionar o mesmo Pokémon duas vezes
- ✅ **Remoção Flexível** - Remove Pokémons por ID ou nome
- ✅ **Validação Rigorosa** - Type-checking com TypeScript e validação de dados
- ✅ **Arquitetura Limpa** - Separação clara entre camadas (Controllers, Services, Models, Validators)
- ✅ **Tipagem Forte** - Interfaces e types bem definidos para segurança

---

## 📋 Requisitos

- **Node.js** >= 18.0.0
- **npm** ou **yarn**

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/robsonhl/pokedex-typescript-lite.git
cd pokedex-typescript-lite
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Verifique a instalação

```bash
npm run dev
```

---

## 💻 Como Usar

### Executar em Modo Desenvolvimento

```bash
npm run dev
```

Este comando:
- Compila o TypeScript sob demanda
- Executa a aplicação com `tsx`
- Demonstra as operações do catálogo através do menu automático

### Build da Aplicação

```bash
npm run build
```

Gera os arquivos compilados em JavaScript na pasta `dist/`

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Finalidade |
|-----------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript |
| **TypeScript** | 6.0.3 | Tipagem estática |
| **tsx** | 4.22.3 | Executor TypeScript nativo |
| **ESLint** | 9.39.4 | Linting e análise de código |
| **Prettier** | 3.8.3 | Formatação de código |
| **PokéAPI** | v2 | API de Pokémons (externa) |

### DevDependencies

```json
{
  "@types/node": "^25.9.1",
  "@typescript-eslint/eslint-plugin": "^8.59.4",
  "@typescript-eslint/parser": "^8.59.4",
  "eslint": "^9.39.4",
  "eslint-config-prettier": "^10.1.8",
  "eslint-import-resolver-typescript": "^4.4.4",
  "eslint-plugin-import": "^2.32.0",
  "eslint-plugin-prettier": "^5.5.5",
  "prettier": "^3.8.3",
  "tsx": "^4.22.3",
  "typescript": "^6.0.3",
  "typescript-eslint": "^8.59.4"
}
```

---

## 🏗️ Arquitetura

A aplicação segue o padrão **MVC (Model-View-Controller)** com separação clara de responsabilidades:

```
src/
├── main.ts                           # Ponto de entrada
├── controllers/
│   └── TerminalController.ts        # Orquestra UI e menu
├── services/
│   └── PokeApiService.ts            # Integração com PokéAPI
├── models/
│   ├── Pokemon.ts                   # Interface/Type Pokemon
│   ├── Catalog.ts                   # Classe PokemonCatalog
│   └── PokemonApiResponse.ts        # Interface de resposta da API
└── validator/
    └── PokemonValidator.ts          # Validação de dados
```

### Fluxo de Dados

```
main.ts
  ↓
TerminalController (menu)
  ↓
PokeApiService (buscaPokemon)
  ↓
PokemonValidator (validação)
  ↓
PokemonCatalog (gerenciamento)
```

---

## 📁 Estrutura de Pastas

```
pokedex-typescript-lite/
├── src/
│   ├── controllers/          # Camada de Interface (UI)
│   ├── services/             # Camada de Integração (APIs externas)
│   ├── models/               # Camada de Dados (Types, Interfaces, Classes)
│   ├── validator/            # Validação de dados
│   ├── main.ts               # Ponto de entrada
│   ├── pc_box.json           # Arquivo de dados (persistência)
│   └── tsconfig.json         # Configuração local do TypeScript
├── dist/                     # Saída compilada (JavaScript)
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração global do TypeScript
├── eslint.config.mjs         # Configuração do ESLint
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

---

## 📜 Scripts Disponíveis

```bash
# Executar em modo desenvolvimento (com recompilação automática)
npm run dev

# Compilar TypeScript para JavaScript
npm run build

# Executar testes (não configurado - preparar para o futuro)
npm run test
```

---

## 🎮 Exemplos de Uso

### Exemplo Prático: Operações no Catálogo

```typescript
import { menu } from "./controllers/TerminalController";

async function main(): Promise<void> {
  await menu();
}

main().catch(console.error);
```

**Output esperado:**

```
[OK] pikachu adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
[OK] charmander adicionado ao catálogo.
[OK] Pokémon removido do catálogo.
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon removido do catálogo.
[AVISO] Nenhum Pokémon encontrado com esse ID.
#4 - charmander | Tipos: fire
```

### Operações Básicas

#### 1. Buscar um Pokémon

```typescript
import { buscaPokemon } from "./services/PokeApiService";

const pikachu = await buscaPokemon("pikachu");
console.log(pikachu.name); // "pikachu"
console.log(pikachu.id);   // 25
```

#### 2. Criar um Catálogo

```typescript
import { PokemonCatalog } from "./models/Catalog";

const catalog = new PokemonCatalog();
```

#### 3. Adicionar Pokémon

```typescript
catalog.add(pikachu);
// Output: [OK] pikachu adicionado ao catálogo.
```

#### 4. Remover por ID

```typescript
catalog.remove(25); // Remove por ID
// Output: [OK] Pokémon removido do catálogo.
```

#### 5. Remover por Nome

```typescript
catalog.remove("pikachu"); // Remove por nome
// Output: [OK] Pokémon removido do catálogo.
```

#### 6. Listar Pokémons

```typescript
catalog.list();
// Output: #4 - charmander | Tipos: fire
//         #25 - pikachu | Tipos: electric
```

---

## ✅ Validações

A aplicação implementa validações rigorosas através da classe `PokemonValidator`:

### Campos Validados

| Campo | Tipo | Validação |
|-------|------|-----------|
| `id` | `number` | Obrigatório, deve ser número |
| `name` | `string` | Obrigatório, deve ser string |
| `types` | `array` | Obrigatório, deve ser array |
| `moves` | `array` | Obrigatório, deve ser array |
| `height` | `number` | Obrigatório, deve ser número |
| `weight` | `number` | Obrigatório, deve ser número |
| `hpBase` | `number` | Stats base de HP |
| `speed` | `number` | Stats de velocidade |
| `atkPhysical` | `number` | Ataque físico |
| `atkSpecial` | `number` | Ataque especial |
| `defPhysical` | `number` | Defesa física |
| `defSpecial` | `number` | Defesa especial |

### Exemplo de Validação

```typescript
import { PokemonValidator } from "./validator/PokemonValidator";

try {
  const validated = PokemonValidator.validate(data);
  console.log("Validação OK:", validated);
} catch (error) {
  console.error("Erro de validação:", error.message);
  // "id must be a number"
  // "name must be a string"
  // "Type error"
}
```

---

## ⚠️ Tratamento de Erros

### Erros de API

```typescript
// 404 - Pokémon não encontrado
try {
  const pokemon = await buscaPokemon("invalidPokemon");
} catch (error) {
  console.log("404 - Pokemon não localizado na PokeAPI");
}
```

### Erros de Validação

```typescript
// Dados inválidos
if (!PokemonValidator.validate(invalidData)) {
  // Erro: "Type error" ou validação específica
}
```

### Erros de Duplicação

```typescript
catalog.add(pikachu);
catalog.add(pikachu); // [AVISO] pikachu já está no catálogo.
```

### Erros de Remoção

```typescript
catalog.remove(9999); // [AVISO] Nenhum Pokémon encontrado com esse ID.
```

---

## 🔧 Configurações

### TypeScript (tsconfig.json)

- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: ✅ Habilitado
- **Source Maps**: ✅ Habilitado (para debugging)
- **Declaration Files**: ✅ Habilitado

### ESLint

Configurado com:
- TypeScript ESLint Parser
- Prettier Plugin
- Import Plugin
- Strict type-checking

---

## 🤝 Contribuindo

Este é um projeto educacional. Para contribuições:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/meu-recurso`)
3. Commit suas mudanças (`git commit -m 'Adiciona meu recurso'`)
4. Push para a branch (`git push origin feature/meu-recurso`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença **ISC**.

Veja [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Robson HL**  
[GitHub](https://github.com/robsonhl)

---

## 🔗 Links Úteis

- [PokéAPI Documentation](https://pokeapi.co/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Node.js Documentation](https://nodejs.org/)
- [ESLint Configuration](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

---

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, abra uma [issue](https://github.com/robsonhl/pokedex-typescript-lite/issues) no repositório.

---

**Desenvolvido com ❤️ para aprendizado em Node.js e TypeScript**
