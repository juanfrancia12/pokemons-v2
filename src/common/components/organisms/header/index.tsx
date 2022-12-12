import Logo from "@components/molecules/logo"
import Nav from "@components/molecules/nav"
import { CloseSVG } from "@components/svg/icons/Close"
import { MenuSVG } from "@components/svg/icons/Menu"
import useMenu from "@hooks/useMenu"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const Header = () => {
  const { toggleMenu, handleToggleMenu } = useMenu()

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="bg-primary-500/80 px-4 py-2 rounded-md"
        >
          Light Mode
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="bg-primary-500/20 px-4 py-2 rounded-md"
        >
          Dark Mode
        </button>
      )
    }
  }

  return (
    <header className="w-full bg-primary-400 text-primary-900/80 dark:bg-primary-900 dark:text-primary-400">
      <div className="container mx-auto 2xl:px-40 z-10 py-4 flex justify-between items-center relative md:sticky top-0">
        <Logo />
        <div className="flex justify-center items-center gap-4">
          {renderThemeChanger()}
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
      </div>
    </header>
  )
}
