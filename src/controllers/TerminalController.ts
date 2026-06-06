//Camada de Interface do Usuário. Gerencia entrada do terminal e orquestra exibições.
import { PokemonCatalog } from "../models/Catalog";
import { buscaPokemon } from "../services/PokeApiService";

export async function menu(): Promise<void> {
  const pokemonCatalog = new PokemonCatalog(); // criado a box
  const pikachu = await buscaPokemon("pikachu");
  const charmander = await buscaPokemon("charmander");

  pokemonCatalog.add(pikachu); // add o pikachu pra box
  pokemonCatalog.add(pikachu); // add novamente, mas retorna erro de Pokemon já no catálogo
  pokemonCatalog.add(charmander); // add o charmander pra box
  pokemonCatalog.remove(25); // remove pikachu pelo id
  pokemonCatalog.add(pikachu); // add o pikachu pra box novamente
  pokemonCatalog.remove("pikachu"); //remove pikachu pelo name
  pokemonCatalog.remove(2); //testa com id não registrado no catalogo
  pokemonCatalog.list();
}
