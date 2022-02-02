import { Pokemon, ElementType } from "src/model/pokemon";

export abstract class PokemonDeserializationHelper {
    public static DeserializePokemons(): Array<Pokemon> {

        var _pokemons: Array<Pokemon> = Array<Pokemon>(
            new Pokemon([ElementType.Grass, ElementType.Poison], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 12, 100, "Bulbasaur"),
            new Pokemon([ElementType.Fire], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", 12, 100, "Charmander"),
            new Pokemon([ElementType.Water], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", 12, 100, "Squirtle"),
            new Pokemon([ElementType.Bug], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png", 12, 100, "Caterpie"),
            new Pokemon([ElementType.Bug, ElementType.Poison], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png", 12, 100, "Beedrill"),
            new Pokemon([ElementType.Flying], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png", 12, 100, "Pidgey"),
            new Pokemon([ElementType.Electric], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", 12, 100, "Pikachu"),
            new Pokemon([ElementType.Water], "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png", 12, 100, "Psyduck"),

        );

        return _pokemons;
    }
}