//Camada de Integração Externa (fetch nativo). Retorna Promises tipadas com Interfaces.
import { Pokemon } from "../models/Pokemon";
import { PokemonValidator } from "../validator/PokemonValidator";

export async function buscaPokemon(pokemon: string): Promise<Pokemon> {
  try {
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(`${api}/${pokemon}`);
    switch (res.status) {
      case 200: {
        const data = (await res.json()) as Pokemon;
        const validate = PokemonValidator.validate(data);
        return validate;
      }
      case 404:
        throw new Error("404 - Pokemon não localizado na PokeAPI");
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
