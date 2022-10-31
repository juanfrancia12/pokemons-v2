import { List } from "@components/organisms/list"
import { SearchBAr } from "@components/organisms/searchBar"
import { useState } from "react"

interface Props {
  dataPokemon: any
}

const HomePage = ({ dataPokemon }: Props) => {
  const [txtSearch, setTxtSearch] = useState("")
  return (
    <div className="flex flex-col gap-6">
      <SearchBAr setTxtSearch={setTxtSearch} />
      <List data={dataPokemon} txtSearch={txtSearch} />
    </div>
  )
}

export default HomePage
