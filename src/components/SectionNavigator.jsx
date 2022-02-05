import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const SectionNavigator = (props) => {
    const inputEl = useRef(null);
    useEffect(() => {
        if (props.selected) {
            inputEl.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [props.selected]);
    return (
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={inputEl}>{props.children}</section>
    );
};


SectionNavigator.propTypes = {
    selected: PropTypes.bool
};


export default SectionNavigator;
