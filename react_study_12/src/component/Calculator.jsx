import React, {useState} from "react";
import TemparatureInput from "./TemparatureInput";

function BoilingVerdict(props) {
    if (props.celcius >= 100) {
        return <p>물이 끓습니다</p>
    }
    return <p>물이 끓지 않습니다</p>
}

function toCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temparature, convert) {
    const input = parseFloat(temparature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temparature, setTemparature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelciusChange = (temparature) => {
        setTemparature(temparature);
        setScale("c");
    };

    const handleFahrenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale("f");
    };

    const celcius = scale === "f" ? tryConvert(temparature, toCelcius) : temparature;
    const fahrenheit = scale === "c" ? tryConvert(temparature, toFahrenheit) : temparature;

    return (
        <div>
            <TemparatureInput scale="c" temparature={celcius} onTemparatureChange={handleCelciusChange}/>
            <TemparatureInput scale="f" temparature={fahrenheit} onTemparatureChange={handleFahrenheitChange}/>

            <BoilingVerdict celcius={parseFloat(celcius)}/>
        </div>
    );
}

export default Calculator;