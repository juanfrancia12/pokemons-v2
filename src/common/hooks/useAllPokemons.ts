import { URL_POKEMON } from "@constants/url"
import { FetchAll } from "@helpers/Fetch"
import { useEffect, useState } from "react"

interface setStatePokemon {
  name: string
  url: string
  image: string
}

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState<setStatePokemon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      const data = await FetchAll({ URL_POKEMON })
      setPokemons(data)
      setLoading(false)
    }
    fetch()
  }, [])

  return { loading, pokemons }
}
