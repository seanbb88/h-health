import React from "react"; 

function ATag(props){
    return (
        <a style={{width: '100%', padding: '0', display: 'inline'}}href={props.webLink}> - Click to view doctor profile</a>
    )
}

export default ATag;