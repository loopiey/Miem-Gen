import React from "react"
import logo from '../images/logo.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                alt=""
                className="img--resize"
            />
            <h2 className="header--title">Miem Gen</h2>
            <h4 className="header--project">Loopie - Reactie from Scriemba</h4>
        </header>
    )
}