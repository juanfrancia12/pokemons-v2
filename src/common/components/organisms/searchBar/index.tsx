import { Search } from "@components/molecules/search"

type Props = {
  setTxtSearch: any
}

export const SearchBAr = ({ setTxtSearch }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:flex md:flex-row">
      <Search
        type="search"
        className="bg-gray-300 dark:bg-primary-600 text-primary-900 dark:text-primary-100 py-2 px-4 w-full rounded focus:text-primary-500/90 dark:focus:text-primary-400 md:w-60 lg:w-96 border border-gray-300 dark:border-primary-300 placeholder:text-primary-500/60 dark:placeholder:text-primary-100/60 focus:placeholder:text-primary-500 dark:focus:bg-primary-500 focus:bg-gray-400/40 focus:border-primary-100/40 focus:outline-none"
        placeholder="Empieza a buscar..."
        setTxtSearch={setTxtSearch}
      />
    </div>
  )
}
