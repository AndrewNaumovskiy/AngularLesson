"use strict";
// Тематика - Покемоны
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.HelperClass = exports.Pokemon = void 0;
var ElementType;
(function (ElementType) {
    ElementType[ElementType["Fire"] = 1] = "Fire";
    ElementType[ElementType["Water"] = 2] = "Water";
    ElementType[ElementType["Grass"] = 3] = "Grass";
    ElementType[ElementType["Electric"] = 4] = "Electric";
})(ElementType || (ElementType = {}));
var PokemomBase = /** @class */ (function () {
    function PokemomBase(name, element, baseDamage, health) {
        this._id = HelperClass.GenerateId();
        this._name = name;
        this._elementType = element;
        this._baseDamage = baseDamage;
        this._health = health;
    }
    PokemomBase.prototype.GetId = function () {
        return this._id;
    };
    PokemomBase.prototype.GetName = function () {
        return this._name;
    };
    PokemomBase.prototype.SetName = function (name) {
        this._name = name;
    };
    PokemomBase.prototype.GetHealth = function () {
        return this._health;
    };
    PokemomBase.prototype.Attack = function (pokemon) {
        HelperClass.Log("Pokemon ".concat(this._name, " hits ").concat(pokemon.GetName(), " with ").concat(this._baseDamage, " base damage"), "Debug");
        pokemon.GetDamage([this._baseDamage, this._elementType]);
    };
    PokemomBase.prototype.GetDamage = function (damage) {
        var damageMultiplicator = HelperClass.CalculateDamageMultiplication(this._elementType, damage[1]);
        var amountOfDamage = damage[0] * damageMultiplicator;
        this._health -= amountOfDamage;
        HelperClass.Log("Pokemon ".concat(this._name, " gets ").concat(amountOfDamage, ". HP left ").concat(this.GetHealth()), "Debug");
    };
    return PokemomBase;
}());
var Pokemon = /** @class */ (function (_super) {
    __extends(Pokemon, _super);
    function Pokemon(name, element, image, damage, health) {
        var _this = _super.call(this, name, element, damage, health) || this;
        _this.Level = 1;
        _this.Image = image;
        _this.Position = { x: 100, y: 100 };
        return _this;
    }
    Pokemon.prototype.SetDamage = function (damage) {
        this.SetDamage(damage);
    };
    Pokemon.prototype.SetHealth = function (health) {
        this.SetHealth(health);
    };
    Pokemon.prototype.Render = function () {
        // display pokemon image at x and y position
        if (typeof (this.Image) === "string") {
            console.log("".concat(this.GetName(), " renders ").concat(this.Image, " at X:").concat(this.Position.x, " and Y:").concat(this.Position.y, " coords"));
        }
        else {
            try {
                // convert data to image
                console.log("before displaying image we should convert array of bytes data into image");
            }
            catch (e) {
                HelperClass.Log(e, "Error");
            }
        }
    };
    return Pokemon;
}(PokemomBase));
exports.Pokemon = Pokemon;
var HelperClass = /** @class */ (function () {
    function HelperClass() {
    }
    HelperClass.GenerateId = function () {
        return ++this._id;
    };
    HelperClass.CalculateDamageMultiplication = function (first, second) {
        var damageMultiplicator = 1;
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
    };
    HelperClass.Log = function (arg, errorType) {
        console.log("[".concat(new Date().toLocaleString(), "]: ").concat(errorType, " -> ").concat(arg));
    };
    HelperClass._id = 0;
    return HelperClass;
}());
exports.HelperClass = HelperClass;
var bulbasaur = new Pokemon("Bulbasaur", ElementType.Grass, "bulbasaur.png", 5, 100);
var charmander = new Pokemon("Charmander", ElementType.Fire, "charmander.png", 10, 100);
var squirtle = new Pokemon("Squirtle", ElementType.Water, "squirtle.png", 7, 100);
var pikachu = new Pokemon("Pikachu", ElementType.Electric, "pikachu.png", 12, 100);
pikachu.Attack(bulbasaur);
console.log("-----------------------------");
squirtle.Attack(charmander);
console.log("-----------------------------");
charmander.Attack(pikachu);
