import React, { useState, useContext } from 'react';
import './form.css';
import LoanAmountCalc from './LoanAmountCalc';
import { LoanAmountContext } from './LoanAmountContext'

const Form = (props) => {
    const [loanAmount, setLoanAmount] = useContext(LoanAmountContext);
    const [interestRate, setInterestRate] = useState();
    const [loanTerm, setloanTerm] = useState();



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
        if (!loanAmount || !interestRate || !loanTerm) {
            alert("Missing entry")
        };


        props.calculate(loanAmount, interestRate, loanTerm);
    };



    const handleReset = () => {
        setLoanAmount("");
        setInterestRate("");
        setloanTerm("");
        props.reset();
    };

    return (
        <div className="holder">
            <LoanAmountCalc />

            <div className="wrapper_calc_mort">
                <div className="input_box">
                    <label> Loan Amount </label>
                    <input type="text" maxLength="15" value={loanAmount} placeholder="price - down payment" onChange={loanAmountHandler} />
                </div>
                <div className="input_box">
                    <label> Interest Rate </label>
                    <input type="text" maxLength="15" value={interestRate} placeholder="% per year" onChange={interestRateHandler} />
                </div>
                <div className="input_box">
                    <label> Loan Term  </label>
                    <input type="text" maxLength="15" value={loanTerm} placeholder="years" onChange={loanTermHandler} />
                </div>
            </div>
            <div className="wrapper_calc_reset_btn">
                <div className="calc_reset">
                    <button onClick={handleSubmit}> Calculate </button>
                </div>
                <div className="calc_reset">
                    <button onClick={handleReset}> Reset </button>
                </div>

            </div>


        </div>
    );
};

export default Form;