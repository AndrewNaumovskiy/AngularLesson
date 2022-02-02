import { HelperClass } from "src/helperClasses/HelperClass";

export enum ElementType {
    Fire = "Fire",
    Water = "Water",
    Grass = "Grass",
    Electric = "Electric",
    Poison = "Poison",
    Bug = "Bug",
    Flying = "Flying"
}

interface IPokemon {
    GetId(): number;

    GetHealth(): number;
}


class PokemomBase implements IPokemon {
    private _id: number;
    private _elementTypes: Array<ElementType>;
    private _baseDamage: number;
    private _health: number;

    public GetId(): number {
        return this._id;
    }

    public GetHealth(): number {
        return this._health;
    }

    public GetTypes(): Array<ElementType> {
        return this._elementTypes;
    }

    constructor(elements: Array<ElementType>, baseDamage: number, health: number) {
        this._id = HelperClass.GenerateId();
        this._elementTypes = elements;
        this._baseDamage = baseDamage;
        this._health = health;
    }
}

export class Pokemon extends PokemomBase {
    public Level: number;
    public Image: string;

    public Name: string;

    constructor(elements: Array<ElementType>, image: string, damage: number, health: number, name: string) {
        super(elements, damage, health);

        this.Name = name;
        this.Level = 1;
        this.Image = image;
    }

    public SetDamage(damage: number) {
        this.SetDamage(damage);
    }

    public SetHealth(health: number) {
        this.SetHealth(health);
    }
}

