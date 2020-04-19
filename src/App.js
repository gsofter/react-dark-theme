import React from 'react'
import Switch from './components/Switch'
import Card from './components/Card'
import ThemeProvider from './hooks/ThemeProvider'
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Card />
        <Switch />
      </div>
    </ThemeProvider>
  )
}

export default App
