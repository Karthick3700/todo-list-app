import React from "react";

const Status = ({ todoList }) => {
  const countList = todoList.length;
  return (
    <div className="stats">
      <p className="notify">
        {countList === 0
          ? "You got everything! Ready to ✌"
          : `You have ${countList} items in your list`}
      </p>
    </div>
  );
};

export default Status;
