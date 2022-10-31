import React from "react"

type Props = {
  name: string
  className: string
  options: {
    id: number
    value: string
    label: string
  }[]
}

const Select = ({ name, options, className }: Props) => {
  return (
    <>
      <select name={name} id={name} className={className}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
