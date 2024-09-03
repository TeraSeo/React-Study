import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    messageText: {
        color: "black",
        fontSize: 16
    }
}

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() { // component가 만들어 졌는지 체크
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate() { // component가 업데이트 되었는지 체크
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    componentWillUnmount() { // component가 삭제 되었는지 체크
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;