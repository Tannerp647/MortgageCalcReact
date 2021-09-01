import React, { useState } from 'react';
import './InputBox.css';

const Form = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setloanTerm] = useState('');
    //const calculate = (loanAmount, interestRate, loanTerm) => {
    //  setAnswer(loanAmount * interestRate * loanTerm);
    //};

    const loanAmountHandler = (event) => {
        setLoanAmount(event.target.value);
    };

    const interestRateHandler = (event) => {
        setInterestRate(event.target.value);
    };

    const loanTermHandler = (event) => {
        setloanTerm(event.target.value);

    };
    const handleSubmit = (props) => {
        props.calculate(loanAmount, interestRate, loanTerm);
    };

    return (
        <div>
            <div className="input_box">
                <label> Loan amount </label>
                <input type="number" placeholder="price - down payment" onChange={loanAmountHandler} />
            </div>
            <div className="input_box">
                <label> Interest Rate</label>
                <input type="number" placeholder="% per year" onChange={interestRateHandler} />
            </div>
            <div className="input_box">
                <label> Loan Term  </label>
                <input type="number" placeholder="years" onChange={loanTermHandler} />
            </div>
            <div className="calc_but">
                <button onClick={handleSubmit}> Calculate </button>
            </div>
            <div className="reset_but">
                <button> Reset </button>
            </div>
        </div>
    );
};

export default Form;