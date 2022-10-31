import { useAllPokemons } from "@hooks/useAllPokemons"
import HomePage from "@modules/Home"
import type { NextPage } from "next"

const Home: NextPage = () => {
  const { pokemons } = useAllPokemons()

  return <HomePage dataPokemon={pokemons} />
}

export default Home  
