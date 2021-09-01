//import InputBox from './Components/InputBox';

import Answer from "./Components/Answer"



function App() {

  return (
    <div>
      <h4 className="h1"> Mortgage Loan Calculator </h4>
      {/*  <InputBox
        title="Loan Amount"
        box="price - down payment">
      </InputBox>
      <InputBox
        title="Interest Rate"
        box="% per year">
      </InputBox>
      <InputBox
        title="Loan Term"
        box="years">
      </InputBox> */}

      <div>
        <Answer />
      </div>
    </div>
  );
}

export default App;

