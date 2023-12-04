import React from 'react'
import "./DarkMode.css"

function DarkMode() {
    const setDarkMode = () =>{
        document.querySelector('body').setAttribute('data-theme','dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () =>{
        document.querySelector('body').setAttribute('data-theme','light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme")

    if(selectedTheme === "dark"){
        setDarkMode();
    }

    const toggleTheme = e => {
        if(e.target.checked) setDarkMode()
        else setLightMode()
    }
  return (
    <>
        <label className="switch">
            <input type="checkbox"
                onChange={toggleTheme}  
                defaultChecked = {selectedTheme === "dark"}  
            />
            <span className="slider"></span>
        </label>
    </>
  )
}

export default DarkMode