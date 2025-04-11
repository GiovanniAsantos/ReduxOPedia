import React from "react";
import { useSelector } from "react-redux";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  return destinationList.map((destination, index) => {
    return (
      <div
        className="text-center text-white row"
        key={index}
        style={{ botderbottom: "1px solid #333" }}
      >
        <div className="col-8 col-md-3 offset-md-3 pt-2">
            
        </div>
        <h4>{destination.name}</h4>
        <p>{destination.country}</p>
        <p>{destination.days}</p>
      </div>
    );
  });
  return <div></div>;
}

export default DestinationList;
