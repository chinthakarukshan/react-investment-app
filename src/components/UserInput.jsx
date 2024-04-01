export default function UserInput({userInputData, handleChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required  value={userInputData.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInputData.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInputData.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInputData.duration} onChange={(event) => handleChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );
}