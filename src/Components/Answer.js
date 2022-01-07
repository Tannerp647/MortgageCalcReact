import React, { useState } from "react";
import { getCalc } from "./services.js"
import Form from './Form'
// import LoanAmountProvider from '../Components/Context'
//import { LoanContext } from "./Context";
//Using api from simple server to do the calculations
const Answer = props => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [annualPayment, setAnnualPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calcApi = async (loanAmount, interestRate, loanTerm) => {
        const body = {
            //if key is named the same as the value you only need to write it once and JS will build the object for you.
            loanAmount: parseFloat(loanAmount),
            interestRate: parseFloat(interestRate),
            loanTerm: parseFloat(loanTerm)
        };
        const returnedData = await getCalc(body) //returned data is going to be a response object that has extra stuff (we only need the body of the obj)
        const internationalNumberFormat = new Intl.NumberFormat('en-US')
        setMonthlyPayment(internationalNumberFormat.format(returnedData.monthlyPayment));
        setTotalPayment(internationalNumberFormat.format(returnedData.totalPayment));
        setTotalInterest(internationalNumberFormat.format(returnedData.totalInterest));
        setAnnualPayment(internationalNumberFormat.format(returnedData.annualPayment));
        //if the response is something like "Total Payment": 12, how do you get that response value?
    };

    const resetValues = function () {
        setMonthlyPayment(0)
        setTotalPayment(0)
        setAnnualPayment(0)
        setTotalInterest(0)

    };

    return (
        <div>

            <Form calculate={calcApi} reset={resetValues} />
            <br></br>
            {<p> Monthly Payment(P&I):   {`$${(monthlyPayment)}`} </p>}
            {<p> Total Payment:   {`$${(totalPayment)}`} </p>}
            {<p> Total Interest:   {`$${(totalInterest)}`} </p>}
            {<p> Annual Payment: {`$${(annualPayment)}`} </p>}
        </div>
    );
};
export default Answer;


