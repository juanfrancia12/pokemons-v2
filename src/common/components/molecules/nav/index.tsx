import { NAV_ITEMS } from "@constants/nav"
import Link from "next/link"

type Props = {
  className: string
  onClick: () => void
}

const Nav = ({ className, onClick }: Props) => {
  return (
    <ul className={className} onClick={onClick}>
      {NAV_ITEMS.map((item) => {
        const { id, name, url } = item
        return (
          <li
            key={id}
            className="cursor-pointer bg-primary-300 text-primary-400 px-6 py-2 rounded-md"
          >
            <Link href={url}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
