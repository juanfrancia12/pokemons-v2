import { List } from "@components/organisms/list"
import { SearchBAr } from "@components/organisms/searchBar"
import { useAllPokemons } from "@hooks/useAllPokemons"
import { useState } from "react"

const HomePage = () => {
  const { loading, pokemons } = useAllPokemons()
  const [txtSearch, setTxtSearch] = useState("")

  return (
    <div className="w-full py-8 bg-gray-200 dark:bg-primary-800">
      <div className="container mx-auto 2xl:px-40 flex flex-col gap-6">
        <SearchBAr setTxtSearch={setTxtSearch} />
        <List loading={loading} data={pokemons} txtSearch={txtSearch} />
      </div>
    </div>
  )
}

export default HomePage
