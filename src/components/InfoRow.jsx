import React, { useState } from "react";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";

const formatLabel = (label) => {
  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase to space
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
};

const InfoRow = ({ label, value, onSave, onCancel, editKey }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleSave = () => {
    onSave(editKey, currentValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentValue(value);
    onCancel();
    setIsEditing(false);
  };

  // Handle key press events
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-[#F1F5F9]/50">
      <p className="font-semibold">{formatLabel(label)}:</p>
      <div className="flex items-center gap-4">
        {isEditing ? (
          <>
            <input
              type="text"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              onKeyDown={handleKeyDown} // Add the keydown handler
              className="border border-gray-300 rounded px-2 py-1"
            />
            <button
              onClick={handleSave}
              className="text-green-600 hover:text-green-700"
            >
              <FaCheck />
            </button>
            <button
              onClick={handleCancel}
              className="text-red-600 hover:text-red-700"
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <p className={value ? "text-gray-600" : "text-gray-600 opacity-50"}>
              {value || "N/A"}
            </p>
            <FaPen
              onClick={() => setIsEditing(true)}
              className="text-gray-600 hover:text-blue-500 cursor-pointer hover:scale-[1.18] transition-transform"
              size={12}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InfoRow;
