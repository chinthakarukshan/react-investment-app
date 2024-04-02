import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((result) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;

                    return (<tr id={result.year}>
                        <th>{result.year}</th>
                        <th>{formatter.format(result.valueEndOfYear)}</th>
                        <th>{formatter.format(result.interest)}</th>
                        <th>{formatter.format(totalInterest)}</th>
                        <th>{formatter.format(totalAmountInvested)}</th>
                    </tr>);
                })}
            </tbody>
        </table>
    );
}