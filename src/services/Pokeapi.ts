import axios from 'axios';
import config from '@/config/env';


export interface Pokemon {
  name: string;
  url: string;
}

const client = axios.create({
  baseURL: config.POKEAPI_URL,
});

class Pokeapi {
  static getPokemons = async (): Promise<Pokemon[]> => {
    return (await client.get('pokemon'))?.data;
  };
}

export default Pokeapi;