//Interfaces/Types e Classes de Entidade. Molde rigoroso dos atributos consumidos da API.

export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    moves: string[];
    height: number;
    weight: number;

    // Stats (from stats.baseStat)
    hpBase: number;
    speed: number;
    atkPhysical: number;
    atkSpecial: number;
    defPhysical: number;
    defSpecial: number;
}