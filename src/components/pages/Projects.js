import React from "react";
import {Link} from "react-router-dom";

export default () => (
    <div>
        Projects
        <br/>
        <Link to={'/'}>Home</Link>
        <Link to={'/aboutme'}>About Me</Link>
        <Link to={'/contacts'}>Contacts</Link>
    </div>
);
