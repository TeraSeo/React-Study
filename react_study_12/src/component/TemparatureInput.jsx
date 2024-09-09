import React from "react";

const scaleNames = {
    c: "섭씨",
    f: "화씨"
};

function TemparatureInput(props) {
    const handleChange = (event) => {
        props.onTemparatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]})
            </legend>
            <input value={props.temparature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemparatureInput;