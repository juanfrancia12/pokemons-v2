import React from "react"
import Link from "next/link"
import Image from "next/image"

import NotFound from "@molecules/notfound"

interface Props {
  data: {
    image: string
    name: string
    url: string
  }[]
  txtSearch: string
  loading: boolean
}

export const List = ({ loading, data, txtSearch }: Props) => {
  const dataFilter = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(txtSearch.toLowerCase())
  )

  if (loading) {
    return (
      <NotFound
        message="Cargando datos ..."
        className="col-span-5 text-center text-primary-400 py-4"
      />
    )
  }

  if (!loading && dataFilter.length === 0) {
    return (
      <NotFound
        message="No se encuentra resultados que coincida con su búsqueda"
        className="col-span-5 text-center text-primary-400 py-4"
      />
    )
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
      {data
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(txtSearch.toLowerCase())
        )
        .map(({ name, image }) => {
          return (
            <Link key={name} href={`/${name}`}>
              <article className="card hover:bg-primary-600 cursor-pointer transition-transform hover:scale-105 flex flex-col gap-4 p-4">
                <div className="w-full">
                  <div className="m-auto relative flex items-center justify-center">
                    <Image
                      src={image}
                      alt={name}
                      // layout="fill"
                      width={120}
                      height={120}
                      placeholder="blur"
                      blurDataURL={image}
                      className="absolute"
                    />
                  </div>
                </div>

                <div className="text-xl text-center text-primary-400 font-bold">
                  {name.toLocaleUpperCase()}
                </div>
              </article>
            </Link>
          )
        })}

      {/* {data &&
        data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(txtSearch.toLowerCase())
        ).length === 0 && (
          <NotFound
            message="No se encuentra tu búsqueda."
            className="col-span-5 text-center text-primary-400 py-4"
          />
        )} */}
    </div>
  )
}
