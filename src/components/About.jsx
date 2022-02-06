import React from 'react';
import Bigicon from './BigIcon';
import SectionNavigator from './SectionNavigator';
import SubContentsection from './SubContentSection';

const About = (props) => {
    return (
        <SectionNavigator selected={props.selected} key={props.id}>
            <div className="my-auto">
                <h1 className="mb-5">{props.heading}</h1>
                <div class="subheading ">
                <i class="fas fa-location-arrow"></i>
                    {props.subHeading}
                </div>
                <div class="subheading mb-5">
                    <i class="far fa-envelope"></i>
                    <a class="mail" href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                {props.subContent.map((subItem) => <SubContentsection {...subItem} key={subItem.id}></SubContentsection>)}

                <ul className="list-inline list-social-icons mb-0">
                    {props.icons.map((icon) => (<li key={icon.className} className="list-inline-item">
                        <a href={icon.href}>
                            <Bigicon className={icon.className} />
                        </a>
                    </li>))
                    }
                </ul>
            </div>
        </SectionNavigator>
    );
}

export default About;
