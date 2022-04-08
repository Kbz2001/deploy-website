import React from "react";
import {Link} from "react-router-dom";

export default () => (
    <div>
        Contacts
        <br/>
        <Link to={'/'}>Home</Link>
        <Link to={'/aboutme'}>About Me</Link>
        <Link to={'/projects'}>Projects</Link>
    </div>
);
