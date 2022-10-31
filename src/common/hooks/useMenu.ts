import { useState } from "react"

const useMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return { toggleMenu, handleToggleMenu }
}

export default useMenu
