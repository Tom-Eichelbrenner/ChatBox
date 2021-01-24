import React from "react";

const Message = ({pseudo, message}) => {
    return (
        <p className="user-message">
            {pseudo} : {message}
        </p>
    )
}
export default Message