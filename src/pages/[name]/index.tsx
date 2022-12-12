import { URL_UNIQUE_POKEMON } from "@constants/url"
import { pokemonInterface } from "@interfaces/pokemon.interface"
import { GetServerSideProps } from "next"
import Image from "next/image"

const iterate = (array: any[], key: string) => {
  const newArray = array.map((item, index) => {
    if (index + 1 === array.length) {
      return item[key].name
    }

    return item[key].name + ", "
  })

  return newArray
}

type Props = {
  data: string
  classContainer: string
  classTitle: string
  classContent: string
  title: string
}

const MiniCard = ({
  data,
  classContainer,
  classTitle,
  classContent,
  title,
}: Props) => {
  return (
    <div className={classContainer}>
      <span className={classTitle}>{title}</span>
      <p className={classContent}>{data}</p>
    </div>
  )
}

const DetailsPokemon = ({ data }: pokemonInterface) => {
  return (
    <section className="w-full bg-gray-200 dark:bg-primary-800 py-8">
      <div className="container mx-auto 2xl:px-40">
        <article className="card bg-gray-100 dark:bg-primary-600 flex flex-col items-center gap-4 md:grid md:grid-cols-2">
          <div className="w-72 md:w-auto md:flex md:flex-col md:justify-center md:items-center gap-10">
            <div className={"w-72 cursor-pointer relative"}>
              <span
                className={
                  "absolute md:-top-20 md:-left-24 pointer-events-none text-8xl -rotate-0 text-gray-300/50 dark:text-primary-400/20"
                }
              >{`#${data.id}`}</span>
              <div className="m-auto h-60 relative">
                <Image
                  src={data.sprites.other["official-artwork"].front_default}
                  alt={data.name}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={
                    data.sprites.other["official-artwork"].front_default
                  }
                  className="absolute cursor-default"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-primary-400">
              {data.name.toUpperCase()}
            </h1>
          </div>
          <div className="grid grid-cols-2 content-start gap-4 p-4">
            <MiniCard
              data={`${data.weight} kilograms`}
              classContainer="w-full h-max p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              classTitle="text-2xl"
              classContent="text-lg"
              title={"Weigth"}
            />
            <MiniCard
              data={`${data.height} centimeters`}
              classContainer="w-full h-max p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              classTitle="text-2xl"
              classContent="text-lg"
              title={"Heigth"}
            />
            <MiniCard
              data={`${data.base_experience}`}
              classContainer="w-full h-max p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              classTitle="text-2xl"
              classContent="text-lg"
              title={"Base experience"}
            />
            <MiniCard
              data={`${iterate(data.types, "type")}`}
              classContainer="w-full h-max p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              classTitle="text-2xl"
              classContent="text-lg"
              title={"Types"}
            />
            <div
              className={
                "w-full h-full p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              }
            >
              <span className={"text-2xl"}>Stats</span>
              <div
                className={
                  "text-md flex justify-center items-center flex-wrap gap-4"
                }
              >
                {data?.stats.slice(0, 2).map((item, index) => (
                  <span
                    key={index}
                    className="py-2 px-4 capitalize rounded-md bg-primary-400 dark:bg-primary-600"
                  >
                    {item.stat.name}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={
                "w-full h-full p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md"
              }
            >
              <span className={"text-2xl"}>Abilities</span>
              <div
                className={
                  "text-md flex justify-center items-center flex-wrap gap-4"
                }
              >
                {data?.abilities.slice(0, 2).map((item, index) => (
                  <span
                    key={index}
                    className="py-2 px-4 capitalize rounded-md bg-primary-400 dark:bg-primary-600"
                  >
                    {item.ability.name}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={
                "w-full h-max p-4 bg-gray-200 dark:bg-primary-700 dark:text-primary-400 flex flex-col gap-4 rounded-md col-span-2"
              }
            >
              <span className={"text-2xl"}>Moves</span>
              <div
                className={
                  "text-md flex justify-center items-center flex-wrap gap-4"
                }
              >
                {data?.moves.slice(0, 5).map((item, index) => (
                  <span
                    key={index}
                    className="py-2 px-4 capitalize rounded-md bg-primary-400 dark:bg-primary-600"
                  >
                    {item.move.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DetailsPokemon

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name: namePokemon }: any = context.params

  const response = await fetch(`${URL_UNIQUE_POKEMON}/${namePokemon}`)
  const data = await response.json()

  return {
    props: { namePokemon, data },
  }
}
