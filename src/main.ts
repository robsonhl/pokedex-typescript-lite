//Ponto de entrada. Instancia os serviços, injeta as dependências e inicia o loop principal do menu.
import { menu } from "./controllers/TerminalController";

async function main(): Promise<void> {
  await menu();
}

main().catch(console.error);
