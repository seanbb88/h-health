import React from 'react'; 

const Button = (props) => {
    return (
        <button className={props.className} type="submit">{props.buttonText}</button>
    )
}

export default Button; 