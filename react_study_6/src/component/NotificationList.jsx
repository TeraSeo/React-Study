import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다."
    },
    {
        id: 2,
        message: "점심식사 시간 입니다."
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다."
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // NotificationList 컴포넌트가 생성되면 state안에 notifications 데이터가 초기화된다
            notifications: []
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length) {
                const index = notifications.length;
                notifications.push(
                    reservedNotification[index]
                );
                this.setState({ // state를 업데이트 하기위해서는 setState를 이용해야한다
                    notifications: notifications
                });
            }
            else {
                this.setState({ 
                    notifications: []
                });
                clearInterval(timer);
            }
        }, 1000); // 1초마다 작업 수행
    }

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return <Notification message={notification.message} key={notification.id} id={notification.id}/>
                    })
                }
            </div>
        );
    }
}

export default NotificationList;

