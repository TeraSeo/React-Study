import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={100}></Book>
            <Book name="처음 만난 aws" numOfPage={200}></Book>
            <Book name="처음 만난 spring boot" numOfPage={300}></Book>
        </div>
    );
}

export default Library;