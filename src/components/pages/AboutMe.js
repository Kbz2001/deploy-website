import {Link} from "react-router-dom";
import React from "react";

export default () => (
    <div>
        AboutMe
        <br/>
        <Link to={'/'}>Home</Link>
        <Link to={'/contacts'}>Contacts</Link>
        <Link to={'/projects'}>Projects</Link>
    </div>
);
