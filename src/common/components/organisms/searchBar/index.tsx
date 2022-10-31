import { Search } from "@components/molecules/search"

// const OPTIONS_CATEGORIAS = []

type Props = {
  setTxtSearch: any
}

export const SearchBAr = ({ setTxtSearch }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:flex md:flex-row">
      <Search
        type="search"
        className="bg-primary-600 text-primary-100 py-2 px-4 w-full rounded focus:text-primary-400 md:w-60 lg:w-96 border border-primary-300 placeholder:text-primary-100 focus:bg-primary-500 focus:border-primary-100/40 focus:outline-none"
        placeholder="Empieza a buscar..."
        setTxtSearch={setTxtSearch}
      />
      {/* <Select
        name="select-1"
        className="bg-primary-600 text-primary-400 py-2 px-4 w-full rounded md:w-40 lg:w-56 border border-primary-300"
        options={OPTIONS_CATEGORIAS}
      /> */}
    </div>
  )
}
