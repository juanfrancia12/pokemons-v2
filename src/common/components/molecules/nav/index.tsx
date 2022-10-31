import { NAV_ITEMS } from "@constants/nav"
import Link from "next/link"
import Router, { useRouter } from "next/router"

type Props = {
  className: string
  onClick: () => void
}

const Nav = ({ className, onClick }: Props) => {
  const router = useRouter()
  const isPathDetails = router.pathname === "/[name]"
  return (
    // <ul className={className} onClick={onClick}>
    //   {NAV_ITEMS.map((item) => {
    //     const { id, name, url } = item
    //     return (
    //       <li
    //         key={id}
    //         className="cursor-pointer bg-primary-300 text-primary-400 px-6 py-2 rounded-md"
    //       >
    //         <Link href={url}>{name}</Link>

    //       </li>
    //     )
    //   })}
    // </ul>
    isPathDetails && (
      <button
        onClick={() => Router.back()}
        className="bg-red-100/70 text-red-800 px-4 py-2 rounded-md"
      >
        Regresar
      </button>
    )
  )
}

export default Nav
