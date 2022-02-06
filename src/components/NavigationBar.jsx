import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MENU } from '../content';


const Navigationbar = ({ onClick }) => {
    const [clickedRef, setclickedRef] = useState("About");
    const clickFn = (e, href) => {
        e.preventDefault();
        setclickedRef(href)
        onClick(href)
    }
    return (
        <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">
                <i className="fas fa-bars"></i>
            </a>

            <nav id="sideNav" className="s-sidebar__nav bg-primary">
                <ul>
                    {MENU.map(item => <li key={item.name}>
                        <a className={`s-sidebar__nav-link nav-link ${item.href == clickedRef ? 'active' : ''}`} href={item.href} onClick={(e) => clickFn(e, item.href)}>
                            <i className={item.icon}></i><em>{item.name}</em>
                        </a>
                    </li>)}
                </ul>
            </nav>
        </div>
    );
};

Navigationbar.propTypes = {

};


export default Navigationbar;
