import React, { useState } from "react";
import './InputBox.css'

import Form from './Form'

const Answer = () => {
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [loanMonths, setLoanMonths] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [totalLoanAmount, setTotalLoanAmount] = useState('');
    const [totalPayment, setTotalPayment] = useState('');
    const [annualPayment, setAnnualPayment] = useState('');
    const [totalInterest, setTotalInterest] = useState('');


    // mortgage Calculations
    const interestRatePlusOne = interestRate + 1;
    const interestRateCalc = 1 - Math.pow(interestRatePlusOne, - loanMonths);
    const interestRateCalcTwo = interestRate / interestRateCalc;
    const final = interestRateCalcTwo * totalLoanAmount;

    const calculate = (loanAmount, interestRate, loanTerm) => {
        calculateMonths(loanTerm);
        calcInterestRate(interestRate);
        setTotalLoanAmount(loanAmount);
        setMonthlyPayment(`$${Math.ceil(final)}`);
        setTotalPayment(`$${Math.ceil(final * loanMonths)}`);
        setAnnualPayment(`$${Math.ceil(final) * 12}`);
        setTotalInterest(`$${Math.ceil(final * loanMonths) - totalLoanAmount}`);
    };

    const calculateMonths = (loanTerm) => {
        setLoanMonths(loanTerm * 12);
    };

    const calcInterestRate = (interestRate) => {
        setInterestRate(interestRate / 100 / 12)
    };

    //function to display the number output with commas.
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };




    return (
        <div>
            <Form calculate={calculate} />
            <br></br>
            <br></br>
            <p value={monthlyPayment}> Monthly Payment:   {numberWithCommas(monthlyPayment)} </p>
            <p> Total Payment:   {numberWithCommas(totalPayment)} </p>
            <p> Total Interest:   {numberWithCommas(totalInterest)} </p>
            <p> Annual Payment: {numberWithCommas(annualPayment)} </p>

        </div>

    );

};

export default Answer;