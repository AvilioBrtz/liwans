import React, { useState } from 'react'
import './navbar.css'
import { IoIosSearch } from "react-icons/io";

const Navbar = ({setShow}) => {
  const [page, setPage] = useState("Discover")
  return (
    <>
    <div className='navbar'>
      <div className="logo">
        <h1>Liwans</h1>
      </div>
      <div className="searchtab">
        <IoIosSearch size={20} color='#4D4D4D' fontWeight={300}/>
        <input type="text" placeholder="Search items"/>
      </div>
      <div className="nav-links">
        <ul>
          <li onClick={() => setPage("Discover")} className={page === "Discover"?"red": ""}>Discover</li>
          <li onClick={() => setPage("New Arrivals")} className={page === "New Arrivals"?"red": ""}>New Arrivals</li>
          <li onClick={() => setPage("Cart")} className={page === "Cart"?"red": ""}>Cart</li>
        </ul>
      </div>
      <div className="nav-btn">
        <button onClick={()=> setShow(true)}>Sign Up</button>
      </div>
    </div>
    <div className="menulinks">
      <ul>
        <li>Women</li>
        <li>Kid</li>
        <li>Men</li>
        <li>Sportswear</li>
        <li>Home</li>
        <li>Beauty</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar
