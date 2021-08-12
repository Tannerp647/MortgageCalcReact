import InputBox from './Components/InputBox';





function App() {
  const inputs = [
    {
      title: "Loan Amount",
      box: "price - down payment",
    },
    {
      title: "Interest Rate",
      box: "% per year",
    },
    {
      title: "Loan Term",
      box: "years",
    },

  ];

  return (
    <div>
      <h4 className="h1"> Mortgage Loan Calculator </h4>
      <InputBox
        title={inputs[0].title}
        box={inputs[0].box}>
      </InputBox>
      <InputBox
        title={inputs[1].title}
        box={inputs[1].box}>
      </InputBox>
      <InputBox
        title={inputs[2].title}
        box={inputs[2].box}>
      </InputBox>
    </div>
  );
}

export default App;
