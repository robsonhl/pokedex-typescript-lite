export interface PokemonApiResponse {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  moves: {
    move: string;
  }[];
  height: number;
  weight: number;
  stats: {
    baseStat: number;
    stat: {
      name: string;
    };
  }[];
}
