import React from "react"

type Props = {
  className: string
  placeholder: string
  type: string
  setTxtSearch: any
}

export const Search = ({
  className,
  type,
  placeholder,
  setTxtSearch,
}: Props) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={(e) => setTxtSearch(e.target.value)}
      />
    </>
  )
}
