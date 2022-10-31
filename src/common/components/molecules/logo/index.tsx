import Link from "next/link"

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <h1 className="cursor-pointer md:text-2xl md:font-bold">POKEAPI</h1>
    </Link>
  )
}

export default Logo
