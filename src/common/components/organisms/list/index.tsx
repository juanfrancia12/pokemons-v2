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
}

export const List = ({ data, txtSearch }: Props) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
      {data
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(txtSearch.toLowerCase())
        )
        .map((pokemon) => {
          const { name, url, image } = pokemon
          return (
            <article key={name} className="card hover:bg-primary-600">
              <Link href={`/${name}`}>
                <div className="w-full cursor-pointer transition-transform hover:scale-105">
                  <div className="m-auto h-60 relative">
                    <Image
                      src={image}
                      alt={name}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={image}
                      className="absolute"
                    />
                  </div>
                </div>
              </Link>
              <div className="text-2xl text-center py-4 text-primary-400">
                {name.toLocaleUpperCase()}
              </div>
              <button className="w-full py-3 bg-primary-900 text-primary-100 border-t-2 border-primary-300">
                <Link href={`/${name}`}>Ver mas</Link>
              </button>
            </article>
          )
        })}

      {data &&
        data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(txtSearch.toLowerCase())
        ).length === 0 && (
          <NotFound
            message="No se encuentra tu búsqueda."
            className="col-span-5 text-center text-primary-400 py-4"
          />
        )}
    </div>
  )
}
