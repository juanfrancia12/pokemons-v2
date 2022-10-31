import Logo from "@components/molecules/logo"
import Nav from "@components/molecules/nav"
import { CloseSVG } from "@components/svg/icons/Close"
import { MenuSVG } from "@components/svg/icons/Menu"
import useMenu from "@hooks/useMenu"

export const Header = () => {
  const { toggleMenu, handleToggleMenu } = useMenu()
  return (
    <header className="w-full bg-primary-900">
      <div className="container mx-auto 2xl:px-40 z-10 header relative md:sticky top-0">
        <Logo />
        <Nav
          className={`${
            toggleMenu ? "block" : "hidden"
          } absolute top-0 right-0 w-full h-screen pt-24 flex flex-col items-center gap-6 md:flex md:static md:flex-row md:gap-12 md:w-full md:h-auto md:justify-end md:pt-0`}
          onClick={handleToggleMenu}
        />
        {toggleMenu ? (
          <button
            onClick={handleToggleMenu}
            className={"absolute top-8 right-4 md:hidden"}
          >
            <CloseSVG className="w-5" />
          </button>
        ) : (
          <button onClick={handleToggleMenu} className="md:hidden">
            <MenuSVG className="w-5" />
          </button>
        )}
      </div>
    </header>
  )
}
