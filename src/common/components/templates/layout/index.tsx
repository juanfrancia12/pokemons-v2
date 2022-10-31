import { Header } from "@organisms/header/index"

interface Props {
  children: any
}
// JSX.Element | JSX.Element[]
const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow flex">{children}</main>
    </div>
  )
}

export default Layout
// min-h-[40rem]
// className="grow padding-seccion max-screen py-6 bg-primary-800 w-full"
