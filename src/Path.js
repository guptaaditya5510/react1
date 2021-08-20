import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.css'

function Path(){
    return(
        <>
            <ul>
                <li><NavLink exact to='/home' activeClassName="x">Home</NavLink></li>
                <li><NavLink exact to='/contactus' activeClassName='x'>Contactus</NavLink></li>
                <li><NavLink exact to="/aboutus" activeClassName="x">Aboutus</NavLink></li>
                <li><NavLink exact to="/watch" activeClassName="x">Watch</NavLink></li>
            </ul>
        </>
    )
}
export default Path;