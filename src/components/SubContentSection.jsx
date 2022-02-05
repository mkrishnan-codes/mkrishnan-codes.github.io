import React from 'react';
import PropTypes from 'prop-types';


const SubContentsection = ({ id, text, heading, rightContent, additionalInfo, subHeading }) => {

    return <div key={id} className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
            <h3 className="mb-0">{heading}</h3>
            <div className="subheading mb-3">{subHeading}</div>
            <div>{additionalInfo}</div>
            <p>
                {text}
            </p>
        </div>
        <div className="resume-date text-md-right">
            <span class="text-primary">{rightContent}</span>
        </div>
    </div>


};


SubContentsection.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    rightContent: PropTypes.string,
    additionalInfo: PropTypes.string,

};


export default SubContentsection;
