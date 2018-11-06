import React from 'react';
import alertTypes from './../../constants/AlertTypes';

const Alert = ({type, message}) => {
    if(type &&  message){
        const alertProps = alertTypes[type].props;
        console.log(alertProps.className, alertProps.role);
        return (
            <div className={alertProps.className} role={alertProps.role}>
                {message}
            </div>
        )
    }else {
        return <div></div>
    }
};

export default Alert;
