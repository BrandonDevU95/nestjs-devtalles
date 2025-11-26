import { CreatePokemonDto } from './dto/create-pokemon.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try {
      const pokemon = await this.PokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Pokemon already exists in database: ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        'Something went wrong creating the pokemon.',
      );
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(id: string) {
    let pokemon: Pokemon | null = null;

    if (!isNaN(+id)) {
      // search by number
      pokemon = await this.PokemonModel.findOne({ number: id });
    }

    //MongoID
    if (isValidObjectId(id) && !pokemon) {
      pokemon = await this.PokemonModel.findById(id);
    }

    //name
    if (!pokemon) {
      pokemon = await this.PokemonModel.findOne({ name: id.toLowerCase() });
    }

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with id, name or number "${id}" not found`,
      );
    }
    return pokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
