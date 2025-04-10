import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter : {count}!</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="p-4 col-12 col-md-6">
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
