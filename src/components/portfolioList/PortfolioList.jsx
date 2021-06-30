import "./portfolioList.scss"
import React, { Component } from 'react'

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active? "portfolioList active" : "portfolioList"} 
            onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
