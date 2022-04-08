import React from 'react'

// import './DrawerCloseButton.css'

const drawerCloseButton = props => {
    let drawerClasses = ['side_drawer_backbutton'];
    if (props.show) {
        drawerClasses = ['side_drawer_backbutton open'];
    }
    return (
        <button id={"closeButton"} className={drawerClasses} onClick={props.click}>
            X Close
        </button>)
};

export default drawerCloseButton