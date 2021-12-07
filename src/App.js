
import Answer from "./Components/Answer";
import { DownPaymentProvider } from './Components/DownPaymentContext';
import { LoanAmountProvider } from './Components/LoanAmountContext';


function App() {


  return (
    <div>
      <h4 className="h1"> Mortgage Loan Calculator </h4>
      <LoanAmountProvider>
        <DownPaymentProvider>
          <div>
            <Answer />
          </div>
        </DownPaymentProvider>
      </LoanAmountProvider>
    </div>
  );
}

export default App;

