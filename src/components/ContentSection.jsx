import React from 'react';
import PropTypes from 'prop-types';
import { CONTENT_SECTIONS } from '../content';
import SubContentsection from './SubContentSection';


const Contentsection = () => {

    return (
        <main className="s-layout__content">
            {CONTENT_SECTIONS.map((item) => (<section key={item.id} className="resume-section p-3 p-lg-5 d-flex flex-column" id={item.id}>
                <div className="my-auto">
                    <h2 className="mb-5">{item.heading}</h2>
                    {item.subContent.map((subItem)=><SubContentsection {...subItem} key={item.id}></SubContentsection>)}
                </div>
            </section>))}
        </main>
    );
};


Contentsection.propTypes = {

};


export default Contentsection;
