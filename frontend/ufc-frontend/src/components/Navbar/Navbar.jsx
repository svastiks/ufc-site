import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href="" className="logo">UFC HUB</a>

      <nav className="navbar">
        <a href="/currentfighters" className="">Current Fighters</a>
        <a href="/upcomingevents" className="">Upcoming events</a>
        <a href="/odds" className="">Betting ODDs</a>
        <a href="/news" className="">Twitter News</a>
      </nav>
    </header>
  )
}

export default Navbar
