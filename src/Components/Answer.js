import React, { useState } from "react";

import Form from './Form'

const Answer = () => {
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [loanMonths, setLoanMonths] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [LoanAmount, setLoanAmount] = useState('');
    const [totalPayment, setTotalPayment] = useState('');
    const [annualPayment, setAnnualPayment] = useState('');
    const [totalInterest, setTotalInterest] = useState('');


    // mortgage Calculations
    const interestRatePlusOne = interestRate + 1;
    const interestRateCalc = 1 - Math.pow(interestRatePlusOne, - loanMonths);
    const interestRateCalcTwo = interestRate / interestRateCalc;
    const final = interestRateCalcTwo * LoanAmount;

    //const monthPay = `$${Math.ceil(final)}`;

    //const calcIr = (Number(1 - Math.pow((interestRate + 1) - loanMonths)));
    //const secCalcIr = Number((interestRate / calcIr) * LoanAmount);

    const calculate = (loanAmount, interestRate, loanTerm) => {
        setLoanAmount(loanAmount);
        setMonthlyPayment(`$${Math.ceil(final)}`);
        calculateMonths(loanTerm);
        calcInterestRate(interestRate);
        setTotalPayment(`$${Math.ceil(final * loanMonths)}`);
        setAnnualPayment(`$${Math.ceil(final) * 12}`);
        setTotalInterest(`$${Math.ceil(final * loanMonths) - LoanAmount}`);
    };

    const calculateMonths = (loanTerm) => {
        setLoanMonths(loanTerm * 12);
    };

    const calcInterestRate = (interestRate) => {
        setInterestRate(interestRate / 100 / 12)
    };


    return (
        <div>
            <Form calculate={calculate} />
            <h1> {monthlyPayment} </h1>
            <h1> {loanMonths} </h1>
            <h1> {interestRate} </h1>
            <h2> {LoanAmount}</h2>
            <h2> {totalPayment} </h2>
            <h2> {annualPayment} </h2>
            <h2> {totalInterest} </h2>

        </div>

    );

};

export default Answer;