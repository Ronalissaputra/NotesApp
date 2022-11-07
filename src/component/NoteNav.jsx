import React from "react";
import { Link } from 'react-router-dom';

function NoteNav() {
    return (
        <div className="header">
            <div className="container head">
                <h2>NoteApp</h2>
                <div className="links">
                    <ul className="link">
                        <li><Link to="/" className="a">Home</Link></li>
                        <li><Link to="/add" className="a">Add Note</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

    export default NoteNav;