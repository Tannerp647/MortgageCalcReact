
import React, { createContext, useState } from 'react';

export const DownPaymentContext = createContext();

export const DownPaymentProvider = props => {
    const [downPayment, setDownPayment] = useState();
    return (
        <DownPaymentContext.Provider value={[downPayment, setDownPayment]}>
            {props.children}
        </DownPaymentContext.Provider>
    );
};