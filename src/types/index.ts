export interface PokemonType {
    abilities: any;
    base_experience: any;
    forms: any;
    game_indices: any;
    height: any;
    held_items: any;
    id: number;
    is_default: boolean;
    location_area_encounters: any;
    moves: any;
    name: string;
    order: number;
    past_types: any;
    species: any;
    sprites: {
        front_default: string;
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    };
    stats: BaseStat[];
    types: Type[];
    weight: any;

}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface BaseStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}
export interface PokemonNotFoundProps {
    title: string;
    text: string;
    handler: any;
}

export interface PokedexBodyProps {
    data: PokemonType;
    handler: any;
}

export interface PokemonBaseStatsProps {
    baseStats: BaseStat[];
}

export interface PokemonHeightWeightProps {
    height: number;
    weight: number;
}

export interface PokemonTypePillProps {
    types: any[]
}
