import React, { useState } from 'react';
import './InputBox.css';


const Form = (props) => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setloanTerm] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [downPayment, setDownPayment] = useState("")

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
        setPurchasePrice("");
        setDownPayment("");
    };

    const purchasePriceHandler = (event) => {
        setPurchasePrice(event.target.value);
    };
    const downPaymentHandler = (event) => {
        setDownPayment(event.target.value)
    };

    const handlePriceCalc = () => {
        setLoanAmount(purchasePrice - downPayment);
    };

    return (
        <div>
            <div className="wrapper">
                <div className="calc_loan_box">
                    <input type="text" maxlength="15" value={downPayment} maxlength="15" placeholder="down payment" onChange={downPaymentHandler} />
                </div>
                <div className="calc_loan_box">
                    <input type="text" maxlength="15" value={purchasePrice} placeholder="purchase price" onChange={purchasePriceHandler} />
                </div>
                <div className="calc_price_but">
                    <button onClick={handlePriceCalc}> Calculate loan amount </button>
                </div>
                <div className="input_box">
                    <label> Loan amount </label>
                    <input type="text" maxlength="15" value={loanAmount} placeholder="price - down payment" onChange={loanAmountHandler} />
                </div>
            </div>
            <div className="input_box">
                <label> Interest Rate </label>
                <input type="text" maxlength="15" value={interestRate} placeholder="% per year" onChange={interestRateHandler} />
            </div>
            <div className="input_box">
                <label> Loan Term  </label>
                <input type="text" maxlength="15" value={loanTerm} placeholder="years" onChange={loanTermHandler} />
            </div>
            <div className="float_container">
                <div className="float_child">
                    <button onClick={handleSubmit}> Calculate </button>
                </div>
                <div className="float_child">
                    <button onClick={handleReset}> Reset </button>
                </div>
            </div>


        </div>
    );
};

export default Form;