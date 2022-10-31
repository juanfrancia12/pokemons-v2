interface RouteParam {
  pokemonName: string
}

interface Ability {
  ability: {
    name: string
  }
}

interface Move {
  move: {
    name: string
  }
}

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
  }
}

interface Type {
  type: {
    name: string
  }
}

export interface pokemonInterface {
  data: {
    id: number
    name: string
    abilities: Ability[]
    moves: Move[]
    stats: Stat[]
    types: Type[]
    base_experience: number
    height: number
    weight: number
    sprites: {
      back_default: string
      other: {
        "official-artwork": {
          front_default: string
        }
      }
    }
  }
}
