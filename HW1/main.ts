// Тематика - Покемоны

// + interface
// + class
// + type
// + generic
// + enum
// + tuple
// + union types

type Position2D = {
    x: number;
    y: number;
};

type Errors = "Debug" | "Info" | "Error";

enum ElementType {
    Fire = 1,
    Water = 2,
    Grass = 3,
    Electric = 4
}

interface IPokemon {
    GetId(): number;

    GetName(): string;
    SetName(name: string): void;

    GetHealth(): number;

    Attack(pokemon: IPokemon): void;
    GetDamage(damage: [number, ElementType]): void;
}

interface IRenderable {
    Render(): void;
}

class PokemomBase implements IPokemon {
    private _id: number;
    private _name: string;
    private _elementType: ElementType;
    private _baseDamage: number;
    private _health: number;

    public GetId(): number {
        return this._id;
    }

    public GetName(): string {
        return this._name;
    }

    public SetName(name: string) {
        this._name = name;
    }

    public GetHealth(): number {
        return this._health;
    }

    public Attack(pokemon: IPokemon) {
        HelperClass.Log(`Pokemon ${this._name} hits ${pokemon.GetName()} with ${this._baseDamage} base damage`, "Debug");
        pokemon.GetDamage([this._baseDamage, this._elementType]);
    }

    public GetDamage(damage: [number, ElementType]) {
        let damageMultiplicator: number = HelperClass.CalculateDamageMultiplication(this._elementType, damage[1]);

        let amountOfDamage = damage[0] * damageMultiplicator;

        this._health -= amountOfDamage;

        HelperClass.Log(`Pokemon ${this._name} gets ${amountOfDamage}. HP left ${this.GetHealth()}`, "Debug");
    }

    constructor(name: string, element: ElementType, baseDamage: number, health: number) {
        this._id = HelperClass.GenerateId();
        this._name = name;
        this._elementType = element;
        this._baseDamage = baseDamage;
        this._health = health;
    }
}

export class Pokemon extends PokemomBase implements IRenderable {
    public Level: number;
    public Image: string | Uint8Array; // string: url to image, array of bytes: image representation
    public Position: Position2D;

    constructor(name: string, element: ElementType, image: string | Uint8Array, damage: number, health: number) {
        super(name, element, damage, health);

        this.Level = 1;
        this.Image = image;
        this.Position = { x: 100, y: 100 };
    }

    public SetDamage(damage: number) {
        this.SetDamage(damage);
    }

    public SetHealth(health: number) {
        this.SetHealth(health);
    }

    public Render() {
        // display pokemon image at x and y position

        if (typeof (this.Image) === "string") {
            console.log(`${this.GetName()} renders ${this.Image} at X:${this.Position.x} and Y:${this.Position.y} coords`)
        }
        else {
            try {
                // convert data to image
                console.log("before displaying image we should convert array of bytes data into image")
            }
            catch (e: unknown) {
                HelperClass.Log(e, "Error");
            }
        }
    }
}

export abstract class HelperClass {
    private static _id: number = 0;

    public static GenerateId(): number {
        return ++this._id;
    }

    public static CalculateDamageMultiplication(first: ElementType, second: ElementType): number {
        let damageMultiplicator: number = 1;

        switch (first) {
            case ElementType.Water: {
                switch (second) {
                    case ElementType.Water: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Electric: {
                        damageMultiplicator = 1;
                        break;
                    }
                    case ElementType.Grass: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Fire: {
                        damageMultiplicator = 2;
                        break;
                    }
                }
                break;
            }
            case ElementType.Electric: {
                switch (second) {
                    case ElementType.Water: {
                        damageMultiplicator = 2;
                        break;
                    }
                    case ElementType.Electric: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Grass: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Fire: {
                        damageMultiplicator = 1;
                        break;
                    }
                }
                break;
            }
            case ElementType.Grass: {
                switch (second) {
                    case ElementType.Water: {
                        damageMultiplicator = 2;
                        break;
                    }
                    case ElementType.Electric: {
                        damageMultiplicator = 1;
                        break;
                    }
                    case ElementType.Grass: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Fire: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                }
                break;
            }
            case ElementType.Fire: {
                switch (second) {
                    case ElementType.Water: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                    case ElementType.Electric: {
                        damageMultiplicator = 1;
                        break;
                    }
                    case ElementType.Grass: {
                        damageMultiplicator = 2;
                        break;
                    }
                    case ElementType.Fire: {
                        damageMultiplicator = 0.5;
                        break;
                    }
                }
                break;
            }
        }

        return damageMultiplicator;
    }

    public static Log<T>(arg: T, errorType: Errors): void {
        console.log(`[${new Date().toLocaleString()}]: ${errorType} -> ${arg}`);
    }
}

const bulbasaur = new Pokemon("Bulbasaur", ElementType.Grass, "bulbasaur.png", 5, 100);
const charmander = new Pokemon("Charmander", ElementType.Fire, "charmander.png", 10, 100);
const squirtle = new Pokemon("Squirtle", ElementType.Water, "squirtle.png", 7, 100);
const pikachu = new Pokemon("Pikachu", ElementType.Electric, "pikachu.png", 12, 100);

pikachu.Attack(bulbasaur);
console.log("-----------------------------")
squirtle.Attack(charmander);
console.log("-----------------------------")
charmander.Attack(pikachu);