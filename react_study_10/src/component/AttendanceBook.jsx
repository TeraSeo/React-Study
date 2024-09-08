import React from "react";

const students = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 3,
        name: "Kevin"
    },
    {
        id: 4,
        name: "Jeff"
    }
];

function AttendanceBook(props) {
    return (
        <ul>
            {
                students.map((student) => { // map 함수를 사용할 때는 고유한 key 값을 주어야한다
                    return <li key={student.id}>{student.name}</li>
                })

                // 객체이 key값이 없는 경우 --> map 함수에서 두번째 parameter로 index를 받아서 key 값으로 사용하는 것도 가능하다
                //                     --> 배열의 순서가 바뀌는 등 그러한 상황을 대비해 index를 사용하는 것은 추천되지 않는다, 따라서 고유한 key 값이 객체에 없는 경우에만 index를 사용핟다.

                // students.map((student, index) => {
                //     return <li key={index}>{student.name}</li>
                // })
            }
        </ul>
    );
}

export default AttendanceBook;