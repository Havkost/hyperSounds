import React, { useState } from "react";
import styles from './Navbar.module.css';
import Burger from './navbar/Burger';

const Navbar = (props) => {
    const [burgerActive, burgerToggle] = useState(false);

    return (
        <div className={`${styles.navBar} ${burgerActive ? styles.open : ''}`}>
            <div className={`${styles.burgerContent} ${burgerActive ? styles.active : ''}`}>
                <img className={styles.logo} alt="Hyper Sounds logo"/>
                <nav className={`${styles.nav}`}>
                    <a href="/">Home</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    <a href="/">Link 4</a>
                </nav>
            </div>
            <Burger onClick={() => burgerToggle(!burgerActive)} active={burgerActive} />
        </div>
    )
}

export default Navbar;
