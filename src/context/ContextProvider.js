import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({children }) =>{
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, SetCurrentColor] = useState('#03C9D7')
  const [currentMode, SetCurrentMode] = useState('Light')
  const [themeSettings, SetThemeSettings] = useState(false)

  const setMode = (e) => {
    SetCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value);
    SetThemeSettings(false)
  }
  const setColor = (color) => {
    SetCurrentColor(color)
    localStorage.setItem('colorMode', color);
    SetThemeSettings(false)
  }
  const handleClick = (clicked) =>{
    setIsClicked({...initialState, [clicked]:true})
  }


  return (
    <StateContext.Provider value={{
      //The same as if we pass them like this {{activeMenu, setActiveMenu, isClicked, setIsClicked}}
      activeMenu: activeMenu,
      setActiveMenu: setActiveMenu,
      isClicked: isClicked,
      setIsClicked: setIsClicked,
      handleClick,
      screenSize,  setScreenSize,
      currentColor, currentMode, 
      themeSettings, SetThemeSettings,
      setMode, setColor,
    }}>
      {children}
    </StateContext.Provider>
  )
} 

export const useStateContext = () => useContext(StateContext)