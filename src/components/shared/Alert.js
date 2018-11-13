import React from 'react';
import alertTypes from './../../constants/AlertTypes';

const Alert = ({kind, message}) => {
    if(kind &&  message){
        const alertProps = alertTypes[kind].props;
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
