import React, { useState } from 'react';
import './InputBox.css';

const Input = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setloanTerm] = useState('');


    const loanAmountHandler = (event) => {
        setLoanAmount(event.target.value);
    };

    const interestRateHandler = (event) => {
        setInterestRate(event.target.value);
    };

    const loanTermHandler = (event) => {
        setloanTerm(event.target.value);
    };
    return (
        <div>
            <form>
                <div className="input_box">
                    <label> Loan amount </label>
                    <input type="number" onChange={loanAmountHandler} />
                </div>
                <div className="input_box">
                    <label> Interest Rate</label>
                    <input type="number" onChange={interestRateHandler} />
                </div>
                <div className="input_box">
                    <label> Loan Term  </label>
                    <input type="number" onChange={loanTermHandler} />
                </div>
                <div className="calc_but">
                    <button type="submit"> Calculate </button>
                </div>
                <div className="reset_but">
                    <button> Reset </button>
                </div>
            </form>
        </div>
    );
};

export default Input;