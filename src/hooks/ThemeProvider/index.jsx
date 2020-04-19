import React, { useState, useLayoutEffect } from 'react'
import ThemeContext from '../ThemeContext'
import { darkTheme, lightTheme } from '../../Config/ColorSet/ColorSet'
const applyTheme = (theme) => {
  const root = document.getElementsByTagName('html')[0]
  root.style.cssText = theme.join(';')
}

const ThemeProvider = (props) => {
  const [dark, setDark] = useState(false)
  const value = {
    dark: dark,
    toggle: () => {
      setDark(!dark)
      window.localStorage.setItem('darkTheme', !dark)
      const body = document.getElementsByTagName('body')[0]
      body.style.cssText = 'transition: background .5s ease'
    },
  }
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme')
    if (lastTheme === 'true') {
      setDark(true)
      applyTheme(darkTheme)
    } else {
      setDark(false)
      applyTheme(lightTheme)
    }
  }, [dark])
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
