// import { React } from 'react';

// export const LoanContext = () => React.createContext({

// });

// const LoanAmountProvider = props => {

//     // const resetLoanAmount = () => {
//     //     setPurchasePrice(0);
//     //     setDownPayment(0);
//     // };

//     return (
//         <LoanAmountProvider value={{ reset: resetLoanAmount }}>

//         </LoanAmountProvider>
//     )
// }
// export default LoanAmountProvider;

// import React, { useContext, useState } from 'react';

// const LoanAmountContext = React.createContext();

// export function LoanAmountContextProvider({ children }) {
//     const [purchasePrice, setPurchasePrice] = useState();


//     const purchasePriceHandler = (event) => {
//         setPurchasePrice(event.target.value);
//     };

// };

// return (
//     <LoanAmountContext.provider value={purchasePrice}>
//         {children}
//     </LoanAmountContext.provider>
// )