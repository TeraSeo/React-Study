import React, {useState, useEffect} from "react";
import useCounter from "../hooks/useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
        return () => {
            console.log("unmounted");
        };
    }); // 의존성 배열이 없는 useEffect Hook -> Component 업데이트시에 호출

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]); // 의존성 배열이 있는 useEffect Hook -> 배열 값 변경시에 호출

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>
                퇴장
            </button>

            {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;