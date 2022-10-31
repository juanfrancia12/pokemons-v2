import Logo from "@components/molecules/logo"
import Nav from "@components/molecules/nav"
import { CloseSVG } from "@components/svg/icons/Close"
import { MenuSVG } from "@components/svg/icons/Menu"
import useMenu from "@hooks/useMenu"

export const Header = () => {
  const { toggleMenu, handleToggleMenu } = useMenu()
  return (
    <header className="z-10 header padding-seccion relative md:sticky top-0 max-screen">
      <Logo />
      <Nav
        className={`${
          toggleMenu ? "block" : "hidden"
        } absolute top-0 right-0 w-full h-screen pt-24 flex flex-col items-center gap-6 bg-primary-900 md:flex md:static md:flex-row md:gap-12 md:w-full md:h-auto md:justify-end md:pt-0`}
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
    </header>
  )
}
