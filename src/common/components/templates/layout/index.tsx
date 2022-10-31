import { Header } from "@organisms/header/index"

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="padding-seccion max-screen py-6 bg-primary-800 min-h-[40rem]">
        {children}
      </main>
    </>
  )
}

export default Layout
