import React from 'react';

// import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side_drawer'];
    if (props.show){
        drawerClasses = ['side_drawer open'];
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/aboutme"}>About Me</a></li>
                <li><a href={"/contacts"}>Contacts</a></li>
                <li><a href={"/projects"}>Projects Pursued</a></li>
            </ul>
        </nav>);
};
export default sideDrawer;