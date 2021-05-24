import { PokemonType } from '../../types';
import axiosUtil from '../../utils/axiosUtil';

export async function getPokemon(payload: string): Promise<PokemonType> {
    try {
        const res = await axiosUtil.get(`api/v2/pokemon/${payload}/`);
        return res.data;
    } catch(e) {
        throw e;
    }
}
