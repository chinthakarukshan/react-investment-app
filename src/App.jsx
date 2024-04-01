import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState ({
    initialInvestment: 10000,
    annualInvestment: 100,
    expectedReturn: 140,
    duration: 12
});

function handleChange(inputIdentifier, newValue) {
  setUserInput((previousUserInput) => {
      return {
          ...previousUserInput,
          [inputIdentifier]: newValue
      };
  });
}

  return (
    <>
      <Header/>
      <UserInput userInputData={userInput} handleChange={handleChange}/>
      <Results userInput={userInput}/>
    </>
  );
}

export default App;
