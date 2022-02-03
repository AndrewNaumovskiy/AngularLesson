import { Component } from '@angular/core';
import { PokemonDeserializationHelper } from 'src/helperClasses/PokemonDeserializationHelper';
import { ElementType, Pokemon } from 'src/model/pokemon';

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

  getWeaknesses(types: Array<ElementType>): Array<ElementType> {
    let res: Array<ElementType> = new Array<ElementType>();

    for (let type of types) {
      switch (type) {
        case ElementType.Fire:
          {
            if (!res.includes(ElementType.Water))
              res.push(ElementType.Water);
            if (!res.includes(ElementType.Electric))
              res.push(ElementType.Electric);
            break;
          }
        case ElementType.Water:
          {
            if (!res.includes(ElementType.Grass))
              res.push(ElementType.Grass);
            if (!res.includes(ElementType.Poison))
              res.push(ElementType.Poison);
            break;
          }

        case ElementType.Electric:
          {
            if (!res.includes(ElementType.Water))
              res.push(ElementType.Water);
            if (!res.includes(ElementType.Electric))
              res.push(ElementType.Electric);
            break;
          }
        case ElementType.Grass:
          {
            if (!res.includes(ElementType.Fire))
              res.push(ElementType.Fire);
            break;
          }
        case ElementType.Poison:
          {
            if (!res.includes(ElementType.Fire))
              res.push(ElementType.Fire);
            break;
          }
        case ElementType.Bug:
          {
            if (!res.includes(ElementType.Water))
              res.push(ElementType.Water);
            if (!res.includes(ElementType.Electric))
              res.push(ElementType.Electric);
            break;
          }
        case ElementType.Flying:
          {
            if (!res.includes(ElementType.Water))
              res.push(ElementType.Water);
            if (!res.includes(ElementType.Electric))
              res.push(ElementType.Electric);
            break;
          }
      }
    }

    return res;
  }

  save() {
    alert("changes serialized! (NOT)");
  }
}