import React, { useState } from "react";

import Form from './Form'

const Answer = () => {
    const [answer, setAnswer] = useState('');
    const calculate = (loanAmount, interestRate, loanTerm) => {
        setAnswer(loanAmount * interestRate * loanTerm);
    };
    return (
        <div>
            <Form calculate={calculate} />
            <h1> {answer} </h1>
        </div>

    );

};

export default Answer;