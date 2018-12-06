import React from 'react'; 

function Savings(props){
    return (
        <div className={props.savingsDiv}>
            <h2 className={props.savingsNumber}>{props.actualSavings}</h2>
            <h3 className={props.savingsDesc}>{props.savingsType}</h3>
        </div>
    )
}

export default Savings; 