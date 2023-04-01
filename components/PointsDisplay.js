import React from "react";

const PointsDisplay = ({ points }) => {
  return (
    <div className="font-bold p-4 mb-8 border-b border-gray text-center">
      <p>現在のポイント: {points}</p>
    </div>
  );
};

export default PointsDisplay;
