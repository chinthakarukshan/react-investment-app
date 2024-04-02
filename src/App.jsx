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

const isUserInputValid = userInput.duration > 0;

function handleChange(inputIdentifier, newValue) {
  setUserInput((previousUserInput) => {
      return {
          ...previousUserInput,
          [inputIdentifier]: +newValue
      };
  });
}

  return (
    <>
      <Header/>
      <UserInput userInputData={userInput} handleChange={handleChange}/>
      {isUserInputValid ? <Results userInput={userInput}/> : <p className="center">Please input a valid duration</p>}
    </>
  );
}

export default App;
