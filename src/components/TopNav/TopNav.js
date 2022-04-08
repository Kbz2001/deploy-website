import React from 'react';

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
// import './Sidebar.css';

const topnav = props =>
    (
        <header className={"sidebar"}>
            <nav className={"sidebar_navigation"}>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className={"sidebar_logo"}>
                    Menu
                </div>
                <div className={"spacer"}/>
                <div className={"sidebar_navigation-items"}>
                    <ul>
                        <li><a href={"/"}>Home</a></li>
                        <li><a href={"/aboutme"}>About Me</a></li>
                        <li><a href={"/contacts"}>Contacts</a></li>
                        <li><a href={"/projects"}>Projects Pursued</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );

export default topnav;