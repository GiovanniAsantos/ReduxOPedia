import React from "react";
import { useDispatch } from "react-redux";
import { resetRdexOPedia } from "../../redux/action/action";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetRdexOPedia());
  };

  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={resetCounterAndDestination}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
