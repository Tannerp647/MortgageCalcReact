import React, { useState, useContext } from 'react';
//import './LoanAmountCalc.css'
import './form.css';
//import { LoanAmountContextProvider } from './PurchasePriceContext.js'
import { DownPaymentContext } from './DownPaymentContext';
import { LoanAmountContext } from './LoanAmountContext'


const LoanAmountCalc = () => {
    const [loanAmount, setLoanAmount] = useContext(LoanAmountContext);
    const [downPayment, setDownPayment] = useContext(DownPaymentContext)
    const [purchasePrice, setPurchasePrice] = useState();


    const purchasePriceHandler = (event) => {
        setPurchasePrice(event.target.value);
    };
    const downPaymentHandler = (event) => {
        setDownPayment(event.target.value)
    };



    const handlePriceCalc = () => {
        setLoanAmount(purchasePrice - downPayment);
        setPurchasePrice("");
        setDownPayment("");
    };

    // const resetLoanAmount = function () {
    //     setPurchasePrice(0);
    //     setDownPayment(0);
    // };

    return (
        <div className="wrapper_calc_loan">
            <div className="down_payment_box">
                <input type="text" maxLength="15" value={downPayment} placeholder="down payment" onChange={downPaymentHandler} />
            </div>
            <div className="purchase_price_box" >
                <input type="text" maxLength="15" value={purchasePrice} placeholder="purchase price" onChange={purchasePriceHandler} />
            </div>
            <div className="calc_loan_but">
                <button onClick={handlePriceCalc} value={loanAmount}> Calculate loan amount </button>
            </div>
        </div>


    )
};




export default LoanAmountCalc;