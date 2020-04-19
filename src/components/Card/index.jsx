import React, { useContext } from 'react'
import './style.css'
import ThemeContext from '../../hooks/ThemeContext'
const Card = (props) => {
  const { dark } = useContext(ThemeContext)
  return (
    <div className="card">
      <div className="img">
        <h2>{props.title || 'Hello World!'}</h2>
        <p>
          {props.description ||
            `${dark ? 'This is Dark Theme' : 'This is LightTheme'}`}
        </p>
      </div>
    </div>
  )
}

export default Card
