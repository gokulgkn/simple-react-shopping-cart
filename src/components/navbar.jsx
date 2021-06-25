import React, { Component } from 'react';

const NavBar = ({ totalItems }) => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Your Cart
                <span class = "m-2">| Total Items {totalItems}</span>
                </a>
            </div>
        </nav>
    );
}
 
export default NavBar;