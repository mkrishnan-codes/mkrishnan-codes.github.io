import React from 'react';
import PropTypes from 'prop-types';
import { CONTENT_SECTIONS } from '../content';
import Contentswitch from './ContentSwitch';


const Contentsection = ({ selectedSection }) => {
    return (
        <main className="s-layout__content">
            {CONTENT_SECTIONS.map((item) => <Contentswitch selected={selectedSection == item.id} key={item.id} {...item} />)}
        </main>
    );
};


Contentsection.propTypes = {

};


export default Contentsection;
