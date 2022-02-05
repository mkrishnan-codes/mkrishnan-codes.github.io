import React from 'react';
import PropTypes from 'prop-types';
import { MENU } from '../content';


const Navigationbar = () => {
    return (
        <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">
                <i className="fa fa-bars"></i>
            </a>

            <nav className="s-sidebar__nav">
                <ul>
                    {MENU.map(item=><li key={item.name}>
                        <a className="s-sidebar__nav-link" href={item.href}>
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
