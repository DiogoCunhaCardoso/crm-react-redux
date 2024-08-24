import React from "react";
import {
  FaDollarSign,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";

const StatsCard = ({ title, value, iconSize = 24, percentage }) => {
  // Determine the arrow icon and color based on the percentage value
  const isPositive = percentage && parseFloat(percentage) > 0;
  const ArrowIcon = isPositive ? FaArrowAltCircleUp : FaArrowAltCircleDown;
  const arrowColor = isPositive ? "#37D64F" : "red";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center bg-[#F1F5F9] w-[280px] p-5 rounded-lg">
        <div>
          <p className="text-[#64748B] mb-0.5 text-xs">{title}</p>
          <p className="text-[#1E1E1E] font-semibold text-2xl">{value}</p>
        </div>
        <div className="bg-white rounded-md p-4">
          <FaDollarSign size={iconSize} />
        </div>
      </div>
      <div className="flex text-xs items-center gap-1.5">
        {percentage && (
          <div className="bg-[#F1F5F9] w-fit px-2 py-1 rounded-md text-sm font-medium flex justify-center items-center gap-1">
            <ArrowIcon color={arrowColor} />
            <p>{percentage}</p>
          </div>
        )}
        {percentage && <p>than last month</p>}
      </div>
    </div>
  );
};

export default StatsCard;
