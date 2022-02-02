import { Component } from '@angular/core';
import { PokemonDeserializationHelper } from 'src/helperClasses/PokemonDeserializationHelper';
import { Pokemon } from 'src/model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*

+ інтерполяцію (простий рендеринг)
+ одно- та дво-сторонню привязку даних (binding)
+ цикл
+ умовне відображення
+ ngStyle, + ngClass
+ switch
*/


export class AppComponent {
  applicationName = 'Pokedex';

  _pokemons: Array<Pokemon> = PokemonDeserializationHelper.DeserializePokemons();

  title = 'application';
  showAdditionalInfo = false;

  selectedPokemon: Pokemon = new Pokemon([], "", -1, -1, "");

  toggleInfo(clickedPokemon: Pokemon) {

    if (this.selectedPokemon === clickedPokemon) {
      this.showAdditionalInfo = !this.showAdditionalInfo;
    }

    this.selectedPokemon = clickedPokemon;
  }

  getTypeColor(type: string) {
    switch (type) {
      case 'Fire': return '#fd7d24';
      case 'Water': return '#4592c4';
      case 'Grass': return '#9bcc50';
      case 'Electric': return '#eed535';
      case 'Poison': return '#b97fc9';
      case 'Bug': return '#729f3f';
      case 'Flying': return '#3dc7ef';

    }

    return 'black';
  }

  save() {
    alert("changes serialized! (NOT)");
  }
}
