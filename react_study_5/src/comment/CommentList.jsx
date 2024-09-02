import React from "react";
import Comment from "./Comment";

const comments = [ // comments 객체
    {
        name: "user1",
        commentText: "hello"
    },
    {
        name: "user2",
        commentText: "nice to meet you"
    },
    {
        name: "user3",
        commentText: "first comment"
    },
    {
        name: "user4",
        commentText: "react study"
    },
    {
        name: "user5",
        commentText: "component and props"
    },
]

function CommentList(props) { // CommentList 컴포넌트
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} commentText={comment.commentText}/>
                    );
                })
            }
        </div>
    )
}

export default CommentList;