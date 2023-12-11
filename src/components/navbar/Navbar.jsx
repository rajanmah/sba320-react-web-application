import { useState, useEffect } from 'react'
import Menu from '../menu/Menu'
import './navbar.css'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false)

useEffect (()=>{
    function activateNav(){
        let scrollPositon = window.pageYOffset 
        if(scrollPositon > 200){
            setNav(true)
    } else if (scrollPositon <10 ){
            setNav(false)
       }
}
window.addEventListener("scroll", activateNav)
})
    const menuToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className= {`navbar ${nav && 'navbar-active'}`}>
            <div className="container">
                <a href="index.html" className="brand">brandLoGO</a>
                <Menu menuOpen={menuOpen} />
                <div className="menu-btn">
                    <i className="fas fa-bars" onClick={menuToggle}></i>
                </div>
            </div>
        </div>
    )
}

