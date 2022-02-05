import React from 'react';

const Bigicon = (props) => {
    return (
        <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class={`fa ${props.className} fa-stack-1x fa-inverse`}></i>
        </span>
    );
}

export default Bigicon;
