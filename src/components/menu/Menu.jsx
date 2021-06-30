import "./menu.scss"
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div  className={"menu "+ (menuOpen && "active") }>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/" > Home</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/about" > About</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/portfolio">Portfolio</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/work">Works</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/testimonials">Testimonials</Link>
                </li>  
                 <li onClick={()=> setMenuOpen(false)}>
                    <Link to ="/contact">Contact</Link>
                </li>
            </ul>
            
        </div>
    )
}

