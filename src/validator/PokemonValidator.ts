import { Pokemon } from "../models/Pokemon";

export class PokemonValidator {
  static validate(value: unknown): Pokemon {
    if (!this.isObject(value)) {
      throw new Error("Type error");
    }
    // const requiredFields = [
    //   "id",
    //   "name",
    //   "types",
    //   "moves",
    //   "height",
    //   "weight",
    //   "hpBase",
    //   "speed",
    //   "atkPhysical",
    //   "atkSpecial",
    //   "defPhysical",
    //   "defSpecial",
    // ];
    // for (const field of requiredFields) {
    //   if (!(field in value)) {
    //     throw new Error(`Missing required field: ${field}`);
    //   }
    // }

    if (!this.isNumber(value.id)) {
      throw new Error("id must be a number");
    }

    if (!this.isString(value.name)) {
      throw new Error("name must be a string");
    }

    if (!Array.isArray(value.types)) {
      throw new Error("types must be an array");
    }

    if (!Array.isArray(value.moves)) {
      throw new Error("moves must be an array");
    }

    if (!this.isNumber(value.height)) {
      throw new Error("height must be a number");
    }

    if (!this.isNumber(value.weight)) {
      throw new Error("weight must be a number");
    }

    return {
      id: value.id,
      name: value.name,
      types: value.types,
      moves: value.moves,
      height: value.height,
      weight: value.weight,
      hpBase: value.hpBase,
      speed: value.speed,
      atkPhysical: value.atkPhysical,
      atkSpecial: value.atkSpecial,
      defPhysical: value.defPhysical,
      defSpecial: value.defSpecial,
    };
  }

  private static isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
  }

  private static isString(value: unknown): value is string {
    return typeof value === "string";
  }

  private static isNumber(value: unknown): value is number {
    return typeof value === "number";
  }
}
