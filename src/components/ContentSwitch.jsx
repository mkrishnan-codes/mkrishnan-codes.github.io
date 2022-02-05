import React from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Skills from './Skills';

import SubContentsection from './SubContentSection';
import SectionNavigator from './SectionNavigator';

const Contentswitch = (props) => {
    switch (props.id) {
        case "About": {
            return <About  {...props} />
        }
        case "Skills": {
            return <Skills {...props} />
        }
        default: return (<SectionNavigator selected={props.selected} key={props.id}>
            <div className="my-auto">
                <h2 className="mb-5">{props.heading}</h2>
                {props.subContent.map((subItem) => <SubContentsection {...subItem} key={subItem.id}></SubContentsection>)}
            </div>
        </SectionNavigator>)
    }
};


Contentswitch.propTypes = {

};


export default Contentswitch;
