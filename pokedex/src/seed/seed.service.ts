import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from 'src/common/adapters/axios-adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async runSeed() {
    const pokemonToInsert: CreatePokemonDto[] = [];

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach(async ({ name, url }) => {
      const segment = url.split('/');
      const number = +segment[segment.length - 2];

      pokemonToInsert.push({ name, number });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed';
  }
}
