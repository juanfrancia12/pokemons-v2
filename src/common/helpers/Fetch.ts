import { fetchInterface } from "@interfaces/fetch.interface"

type Props = {
  URL_POKEMON: string
}

export const FetchAll = async ({ URL_POKEMON }: Props) => {
  const data = await fetch(`${URL_POKEMON}`)
    .then((response) => response.json())
    .then((data: fetchInterface) => data.results)

  const data2 = data.map((result, index) => {
    const paddedIndex = ("00" + (index + 1)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
    return {
      ...result,
      image,
    }
  })

  return data2
}

// export const FetchUnique = async ({ URL_POKEMON }: Props) => {
//   const data3 = await fetch(`${URL_POKEMON}`, {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => data)
// }
