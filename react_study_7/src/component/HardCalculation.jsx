import React, {useMemo, useState} from "react";

const hardCalculate = (hardNumber) => {
    console.log("어려운 계산!");
    var number = 0;
    for (let i = 0; i < hardNumber; i++) {
        number += i;
    }
    return number;
  };

function HardCalculation(props) {
    const initialHardNumber = 335553320;
    const [hardNumber, setHardNumber] = useState(initialHardNumber);

    const increaseHardNumber = () => setHardNumber(hardNumber + 1);
    const maintainHardNumber = () => setHardNumber(hardNumber);
    const decreaseHardNumber = () => setHardNumber(hardNumber - 1);

    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
      }, [hardNumber]);

    return (
        <div>
            <h1>{`hardSum ${hardSum}`}</h1>

            <button onClick={increaseHardNumber}>
                +
            </button>
            <button onClick={maintainHardNumber}>
                =
            </button>
            <button onClick={decreaseHardNumber}>
                -
            </button>
            
        </div>
    );
}

export default HardCalculation;