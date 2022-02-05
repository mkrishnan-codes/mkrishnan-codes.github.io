import React from 'react';
import SectionNavigator from './SectionNavigator';
import SubContentsection from './SubContentSection';

const About = (props) => {
    return (
        <SectionNavigator selected={props.selected} key={props.id}>
            <div className="my-auto">
                <h2 className="mb-5">{props.heading}</h2>
                {props.subContent.map((subItem) => <SubContentsection {...subItem} key={subItem.id}></SubContentsection>)}
            </div>
        </SectionNavigator>
    );
}

export default About;
