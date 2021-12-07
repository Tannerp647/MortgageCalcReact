import React, { createContext, useState } from 'react';

export const LoanAmountContext = createContext();

export const LoanAmountProvider = props => {
    const [loanAmount, setLoanAmount] = useState();
    return (
        <LoanAmountContext.Provider value={[loanAmount, setLoanAmount]}>
            {props.children}
        </LoanAmountContext.Provider>
    );
};
