import React, { useState } from "react";
import './InputBox.css'
import { getCalc } from "./services.js"
import Form from './Form'
//Using api from simple server to do the calculations
const Answer = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [annualPayment, setAnnualPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calcApi = async (loanAmount, interestRate, loanTerm) => {
        const body = {
            //if key is named the same as the value you only need to write it once and JS will build the object for you.
            loanAmount: parseInt(loanAmount),
            interestRate: parseInt(interestRate),
            loanTerm: parseInt(loanTerm)
        };
        const returnedData = await getCalc(body) //returned data is going to be a response object that has extra stuff (we only need the body of the obj)
        setMonthlyPayment(returnedData.monthlyPayment);
        setTotalPayment(returnedData.totalPayment);
        setTotalInterest(returnedData.totalInterest);
        setAnnualPayment(returnedData.annualPayment);
        //if the response is something like "Total Payment": 12, how do you get that response value?
    };

    //React code to do the calculations
    /*const calculate = (loanAmount, interestRate, loanTerm) => {

        // mortgage Calculations
        const loanMonths = loanTerm * 12;
        const interestRateOne = interestRate / 100 / 12;
        const interestRatePlusOne = interestRateOne + 1;
        const interestRateCalc = 1 - Math.pow(interestRatePlusOne, - loanMonths);
        const interestRateCalcTwo = interestRateOne / interestRateCalc;
        const final = interestRateCalcTwo * loanAmount;

        setMonthlyPayment(`$${Math.ceil(final)}`);
        setTotalPayment(`$${Math.ceil(final * loanMonths)}`);
        setAnnualPayment(`$${Math.ceil(final) * 12}`);
        setTotalInterest(`$${Math.ceil(final * loanMonths) - loanAmount}`);
    };
*/
    return (
        <div>
            <Form calculate={calcApi} />
            <br></br>
            <br></br>
            {<p> Monthly Payment:   {(monthlyPayment.toLocaleString('en-US'))} </p>}
            {<p> Total Payment:   {(totalPayment.toLocaleString('en-US'))} </p>}
            {<p> Total Interest:   {(totalInterest.toLocaleString('en-US'))} </p>}
            {<p> Annual Payment: {(annualPayment.toLocaleString('en-US'))} </p>}
        </div>
    );
};
export default Answer;


