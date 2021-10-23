import React, { useState } from 'react';
import './InputBox.css';

const Form = (props) => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setloanTerm] = useState(0);


    const loanAmountHandler = (event) => {
        setLoanAmount(event.target.value);
    };

    const interestRateHandler = (event) => {
        setInterestRate(event.target.value);
    };

    const loanTermHandler = (event) => {
        setloanTerm(event.target.value);

    };
    const handleSubmit = () => {
        if (loanTerm && interestRate && loanTerm) {
            props.calculate(loanAmount, interestRate, loanTerm);
        };
    };
    // if (!loanTerm || !interestRate || !loanTerm) {
    //     alert("Missing entry")
    // };

    const handleReset = () => {
        setLoanAmount(0);
        setInterestRate(0);
        setloanTerm(0);

    };

    return (
        <div>
            <div className="input_box">
                <label> Loan amount </label>
                <input type="number" value={loanAmount} placeholder="price - down payment" onChange={loanAmountHandler} />
            </div>
            <div className="input_box">
                <label> Interest Rate</label>
                <input type="number" value={interestRate} placeholder="% per year" onChange={interestRateHandler} />
            </div>
            <div className="input_box">
                <label> Loan Term  </label>
                <input type="number" value={loanTerm} placeholder="years" onChange={loanTermHandler} />
            </div>
            <div className="float_container">
                <div className="float_child">
                    <button onClick={handleSubmit}> Calculate </button>
                </div>
                <div className="float_child">
                    <button onClick={handleReset}> Reset </button>
                </div>
            </div>
            <div className="calc-button">
                <button> Calculate loan amount</button>
            </div>

        </div>
    );
};

export default Form;