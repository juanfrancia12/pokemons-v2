import React from "react"

type Props = {
  message: string
  className: string
}

const NotFounf = ({ message, className }: Props) => {
  return <div className={className}>{message}</div>
}

export default NotFounf
