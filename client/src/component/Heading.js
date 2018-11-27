import React from 'react';

const Heading = (props) => {
    
    return (
        <h1 className={props.className}>{props.headingText}</h1>
    )
}

export default Heading; 