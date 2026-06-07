import { Pokemon } from "./Pokemon";

export class PokemonCatalog {
  private pokemons: Pokemon[] = [];

  add(pokemon: Pokemon): void {
    const pokemonExists = this.pokemons.some((item) => item.id === pokemon.id);

    if (pokemonExists) {
      console.log(`[AVISO] ${pokemon.name} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`);
  }

  list(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${String(pokemon.id)} - ${pokemon.name} | Tipos: ${pokemon.types.map((item) => item.type.name).join(", ")}`,
      );
    });
  }

  remove(pokemon: number | string): void {
    const exists = this.pokemons.some(
      (poke) => poke.id === pokemon || poke.name === pokemon,
    );

    if (!exists) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }
    if (typeof pokemon === "number") {
      this.pokemons = this.pokemons.filter((poke) => poke.id !== pokemon);
    }
    if (typeof pokemon === "string") {
      this.pokemons = this.pokemons.filter((poke) => poke.name !== pokemon);
    }
    console.log("[OK] Pokémon removido do catálogo.");
  }
}
