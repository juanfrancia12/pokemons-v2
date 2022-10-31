import { useEffect, useState } from "react"
import { URL_POKEMON, URL_UNIQUE_POKEMON } from "@constants/url"
import { FetchAll } from "@helpers/Fetch"

interface setStatePokemon {
  name: string
  url: string
  image: string
}

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState<setStatePokemon | {}[] | any>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await FetchAll({ URL_POKEMON })
      setPokemons(data)
    }
    fetch()
  }, [])

  return { pokemons }
}
