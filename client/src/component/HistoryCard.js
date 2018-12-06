import React from 'react';
import faker from 'faker';

function HistoryCard(props) {
    return (
        <div className="ui raised link card history-card">
            <div className="content content-div">
                <div className="header procedure-done">{`${props.procedure}`}</div>
                <div className="meta break-point">
                    <span className="category doc-type">{props.docType}</span>
                </div>
                <div className="description">
                    <p className="account-num">{`Account #: ${faker.finance.account()}`}</p>
                    <p className="phone-num">{`Phone #: ${faker.phone.phoneNumber()}`}</p>
                    <div className="savings-div">                    
                        <p className="money-symbol">$</p>
                        <p className="savings-num">{props.savingsNum}</p></div>
                    </div>
                <div className="right floated author">
                    <img className="ui avatar image doctor-avatar" alt="avatar" src={faker.image.image()}></img>
                    <p className="doctor-name">{`Dr. ${faker.name.findName()}`}</p>
                </div>

            </div>
        </div>
    )

}

export default HistoryCard;